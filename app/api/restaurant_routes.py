from flask import Blueprint, jsonify, request, redirect
from app.models import Restaurant, User, Review, MenuItem
from ..forms.restaurant_form import RestaurantForm
from ..forms.menu_item_form import MenuItemForm
from ..forms.review_form import ReviewForm
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
    reviews = Review.query.all()

    all_restaurant_list = [restaurant.to_dict() for restaurant in restaurants]
    all_review_list = [review.to_dict() for review in reviews]


    for restaurant_obj in all_restaurant_list:
        # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", restaurant_obj.review)
        restaurant_reviews = [ review for review in all_review_list if review["restaurant_id"] == restaurant_obj["id"] ]
        sum_stars = 0
        for restaurant_review in restaurant_reviews:
            sum_stars += restaurant_review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(restaurant_reviews)
            restaurant_obj["avg_rating"] = avg_rating
            restaurant_obj["num_reviews"] = len(restaurant_reviews)

    return { "restaurants": all_restaurant_list}


@restaurant_routes.route('/<int:id>')
def get_restaurant_by_id(id):
    """
    Query for restaurant by restaurant.id
    """

    one_restaurant = Restaurant.query.get(id).to_dict()
    reviews = Review.query.all()
    all_reviews = [review.to_dict() for review in reviews]

    restaurant_reviews = [ review for review in all_reviews if review["restaurant_id"] == one_restaurant["id"] ]
    sum_stars = 0

    for review in restaurant_reviews:
        sum_stars += review["stars"]
    if sum_stars > 0:
        avg_rating = sum_stars / len(restaurant_reviews)
        one_restaurant["avg_rating"] = avg_rating
        one_restaurant["num_reviews"] = len(restaurant_reviews)

    if not one_restaurant:
        return { "message": "Restaurant not found!" }, 404

    return one_restaurant


@restaurant_routes.route('/current')
@login_required
def get_owned_restaurants():
    """
    GET all owned restaurant route
    """

    all_restaurants = Restaurant.query.all()
    reviews = Review.query.all()
    owned_restaurants = [ restaurant.to_dict() for restaurant in all_restaurants if restaurant.owner_id == current_user.id ]

    all_review_list = [review.to_dict() for review in reviews]

    for restaurant_obj in owned_restaurants:
        restaurant_reviews = [ review for review in all_review_list if review["restaurant_id"] == restaurant_obj["id"] ]
        sum_stars = 0
        for restaurant_review in restaurant_reviews:
            sum_stars += restaurant_review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(restaurant_reviews)
            restaurant_obj["avg_rating"] = avg_rating
            restaurant_obj["num_reviews"] = len(restaurant_reviews)


    return { "restaurants": owned_restaurants }


@restaurant_routes.route('/', methods=["POST"])
@login_required
def create_restaurant():
    """
    Route to post a new restaurant
    """

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
        return { "errors": form.errors }, 400


@restaurant_routes.route("/<int:restaurantId>", methods=["PUT"])
@login_required
def update_restaurant(restaurantId):
    """
    Update a current restaurant
    """
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
    """
    Delete a restaurant
    """
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


@restaurant_routes.route('/<int:restaurantId>/menuitems')
#/api/restaurants/:restaurantId/menuitems
def get_restaurant_menu_items(restaurantId):
    """
    Query for all menu items for a specific restaurant
    """

    all_menu_items = MenuItem.query.all()

    restaurant_menu_items = [menu_item.to_dict() for menu_item in all_menu_items if menu_item.restaurantId == restaurantId]

    return restaurant_menu_items


@restaurant_routes.route('/<int:restaurantId>/createmenuitem', methods=["POST"])
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


@restaurant_routes.route('/<int:restaurantId>/reviews')
def get_restaurant_reviews(restaurantId):
    """
    Query for all reviews for a specific restaurant
    """

    all_reviews = Review.query.all()

    restaurant_reviews = [review.to_dict() for review in all_reviews if review.restaurant_id == restaurantId]

    return restaurant_reviews


@restaurant_routes.route('/<int:restaurantId>/createreview', methods=["POST"])
@login_required
def create_review(restaurantId):
    """
    Route to post a new review
    """

    form = ReviewForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        new_review = Review(
            restaurant_id=restaurantId,
            user_id=current_user.id,
            review=form.data["review"],
            stars=form.data["stars"],
            created_at = date.today(),
            updated_at = date.today()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict(), 201

    else:
        print(form.errors)
        return { "errors": form.errors }, 400



