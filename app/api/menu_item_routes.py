from flask import Blueprint
from app.models import MenuItem, Restaurant
from ..models.db import db
from flask_login import current_user, login_required
from app.api.aws_helpers import remove_file_from_s3

menu_item_routes = Blueprint('menu_item', __name__)


@menu_item_routes.route('/<int:id>')
#/api/menuitems/menuItemId
def get_menu_item_by_id(id):
    """
    Query for menu item by menu_item.id
    """
    one_menu_item = MenuItem.query.get(id)

    if not one_menu_item:
        return { "message": "Menu Item not found!" }, 404

    return one_menu_item.to_dict()


@menu_item_routes.route("/<int:menuItemId>", methods=["DELETE"])
@login_required
def delete_menu_item(menuItemId):
    """
    Delete a menu item and associated S3 files
    """
    menu_item_to_delete = MenuItem.query.get(menuItemId)

    if menu_item_to_delete:
        target_restaurant = Restaurant.query.get(menu_item_to_delete.restaurantId)
        if target_restaurant.owner_id == current_user.id: #req.user.id
            # Delete associated S3 files
            remove_file_from_s3(menu_item_to_delete.imageUrl)

            # Delete the menu item from the database
            db.session.delete(menu_item_to_delete)
            db.session.commit()
            return { "message": "Delete successful!" }
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Menu Item not found!" }, 404

@menu_item_routes.route('/')
#/api/menuitems
def get_restaurant_menu_items():
    """
    Query for all menu items
    """

    all_menu_items = MenuItem.query.all()

    restaurant_menu_items = [menu_item.to_dict() for menu_item in all_menu_items]

    return restaurant_menu_items
