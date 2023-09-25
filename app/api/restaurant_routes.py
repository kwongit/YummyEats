from flask import Blueprint, jsonify, request, redirect
from app.models import Restaurant, User
from ..forms.restaurant_form import RestaurantForm
from datetime import date
from ..models.db import db
from flask_login import current_user


restaurant_routes = Blueprint('restaurant', __name__)


@restaurant_routes.route('/')
def get_all_restaurants():
    """
    Query for all restaurants and returns them in a list of restaurant dictionaries
    """
    print("----------------CURRENT USER --------------------", {current_user.id})
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}


@restaurant_routes.route('/<int:id>')
def get_restaurant_by_id(id):
    """Query for restaurant by restaurant.id"""

    one_restaurant = Restaurant.query.get(id)

    if not one_restaurant:
        return { "message": "Restaurant not found!!!" }

    return one_restaurant.to_dict()


@restaurant_routes.route('/', methods=["POST"])
def create_restaurant():
    """Route to post a new restaurant"""
    form = RestaurantForm()
    # print("----------------CURRENT USER --------------------", current_user)

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        new_restaurant = Restaurant(
            owner_id=current_user.id,
            address=form.data["address"],
            city=form.data["city"],
            state=form.data["state"],
            name=form.data["name"],
            type=form.data["type"],
            price=form.data["price"],
            open_hours=form.data["open_hours"],
            close_hours=form.data["close_hours"],
            image_url=form.data["image_url"],
            created_at = date.today(),
            updated_at = date.today()
        )
        db.session.add(new_restaurant)
        db.session.commit()
        return { "resPost": new_restaurant.to_dict() }

    else:
        print(form.errors)
        return { "errors": form.errors }


@restaurant_routes.route("/delete/<int:restaurantId>")
def delete(restaurantId):
    restaurant_to_delete = Restaurant.query.get(restaurantId)

    if restaurant_to_delete:
        db.session.delete(restaurant_to_delete)
        db.session.commit()
        return { "message": "Delete successful!" }

    else:
        return { "message": "Restaurant not found!" }
