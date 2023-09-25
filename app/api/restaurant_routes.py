from flask import Blueprint, jsonify
from app.models import Restaurant

restaurant_routes = Blueprint('restaurant', __name__)


@restaurant_routes.route('/')
def get_all_restaurants():
    """
    Query for all restaurants and returns them in a list of restaurant dictionaries
    """
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}


@restaurant_routes.route('/<int:id>')
def get_restaurant_by_id(id):
    """Query for restaurant by restaurant.id"""
    one_restaurant = Restaurant.query.get(id)
    return one_restaurant.to_dict()


