from flask import Blueprint, jsonify, request, redirect
from app.models import Restaurant, User
from ..forms.restaurant_form import RestaurantForm
from datetime import date
from ..models.db import db
from flask_login import current_user, login_required


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

    if not one_restaurant:
        return { "message": "Restaurant not found!" }, 404

    return one_restaurant.to_dict()


@restaurant_routes.route('/current')
@login_required
def get_owned_restaurants():

    all_restaurants = Restaurant.query.all()
    owned_restaurants = [ restaurant.to_dict() for restaurant in all_restaurants if restaurant.owner_id == current_user.id ]

    return { "restaurants": owned_restaurants }



@restaurant_routes.route('/', methods=["POST"])
@login_required
def create_restaurant():
    """Route to post a new restaurant"""

    if current_user is None:
        return { "message": "Authentication required" }

    form = RestaurantForm()

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
        return new_restaurant.to_dict(), 201

    else:
        print(form.errors)
        return { "errors": form.errors }


@restaurant_routes.route("/<int:restaurantId>", methods=["PUT"])
@login_required
def update_restaurant(restaurantId):
    form = RestaurantForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    restaurant_to_update = Restaurant.query.get(restaurantId)
    if restaurant_to_update.owner_id == current_user.id:
        if form.validate_on_submit():
            restaurant_to_update.address = form.data["address"]
            restaurant_to_update.city = form.data["city"]
            restaurant_to_update.state = form.data["state"]
            restaurant_to_update.name = form.data["name"]
            restaurant_to_update.type = form.data["type"]
            restaurant_to_update.price = form.data["price"]
            restaurant_to_update.open_hours = form.data["open_hours"]
            restaurant_to_update.close_hours = form.data["close_hours"]
            restaurant_to_update.image_url = form.data["image_url"]
            db.session.commit()
            return restaurant_to_update.to_dict()

        else:
            return { "errors": form.errors }, 400

    else:
        return { "message": "FORBIDDEN" }, 403


@restaurant_routes.route("/<int:restaurantId>", methods=["DELETE"])
@login_required
def delete(restaurantId):
    restaurant_to_delete = Restaurant.query.get(restaurantId)

    if restaurant_to_delete:
        if restaurant_to_delete.owner_id == current_user.id:
            db.session.delete(restaurant_to_delete)
            db.session.commit()
            return { "message": "Delete successful!" }
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Restaurant not found!" }, 404
