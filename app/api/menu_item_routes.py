from flask import Blueprint, jsonify
from app.models import MenuItem

menu_item_routes = Blueprint('menu item', __name__)


@menu_item_routes.route('/menu_items', methods=['GET'])
def get_menu_items_by_id(restaurantId):
    """Query to get all menu items from a specified restaurants"""
    