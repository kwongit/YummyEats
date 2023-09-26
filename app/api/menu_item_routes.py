from flask import Blueprint, jsonify, request
from app.models import MenuItem, Restaurant
from ..forms.menu_item_form import MenuItemForm
from datetime import date
from ..models.db import db
from flask_login import current_user, login_required

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
def delete(menuItemId):
    """
    Delete a menu item
    """
    menu_item_to_delete = MenuItem.query.get(menuItemId)

    if menu_item_to_delete:
        target_restaurant = Restaurant.query.get(menu_item_to_delete.restaurantId)
        if target_restaurant.owner_id == current_user.id: #req.user.id
            db.session.delete(menu_item_to_delete)
            db.session.commit()
            return { "message": "Delete successful!" }
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Menu Item not found!" }, 404
