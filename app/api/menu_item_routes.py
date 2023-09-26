from flask import Blueprint, jsonify, request
from app.models import MenuItem, Restaurant
from ..forms.menu_item_form import MenuItemForm
from datetime import date
from ..models.db import db
from flask_login import current_user, login_required

menu_item_routes = Blueprint('menu_item', __name__)


# @menu_item_routes.route('/menu_items', methods=['GET'])
# def get_menu_items_by_id(restaurantId):
#     """Query to get all menu items from a specified restaurants"""

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

@menu_item_routes.route('/<int:restaurantId>/menuitems')
#/api/restaurants/:restaurantId/menuitems
def get_restaurant_menu_items(restaurantId):
    """
    Query for all menu items for a specific restaurant
    """

    all_menu_items = MenuItem.query.all()

    restaurant_menu_items = [menu_item.to_dict() for menu_item in all_menu_items if menu_item.restaurantId == restaurantId]

    return restaurant_menu_items

@menu_item_routes.route('/<int:restaurantId>/createmenuitem', methods=["POST"])
#/api/restaurants/:restaurantId/createmenuitem
@login_required
def create_menu_item(restaurantId):
    """
    Route to post a new menu item
    """

    form = MenuItemForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        new_menu_item = MenuItem(
            restaurantId=restaurantId,
            name=form.data["name"],
            size=form.data["size"],
            calories=form.data["calories"],
            price=form.data["price"],
            description=form.data["description"],
            imageUrl=form.data["image_url"],
            created_at = date.today(),
            updated_at = date.today()
        )
        db.session.add(new_menu_item)
        db.session.commit()
        return new_menu_item.to_dict(), 201

    else:
        print(form.errors)
        return { "errors": form.errors }, 400

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
