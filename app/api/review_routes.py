from flask import Blueprint, jsonify, request
from app.models import Review, User, Restaurant, MenuItem
from ..forms.review_form import ReviewForm
from datetime import date
from ..models.db import db
from flask_login import current_user, login_required

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/current')
@login_required
def get_all_reviews():
    """
    GET all current user's reviews
    """

    all_reviews = Review.query.all()
    all_review_list = [review.to_dict() for review in all_reviews if review.user_id == current_user.id]

    return all_review_list


@review_routes.route('/<int:reviewId>/updatereview', methods=["PUT"])
@login_required
def update_review(reviewId):
    """
    Route to update a review
    """

    form = ReviewForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    review_to_update = Review.query.get(reviewId)
    if review_to_update.user_id == current_user.id:
        if form.validate_on_submit():
            review_to_update.review = form.data["review"]
            review_to_update.stars = form.data["stars"]
            db.session.commit()
            return review_to_update.to_dict(), 201

        else:
            print(form.errors)
            return { "errors": form.errors }, 400

    else:
        return { "message": "FORBIDDEN" }, 403


@review_routes.route("/<int:reviewId>", methods=["DELETE"])
@login_required
def delete(reviewId):
    """
    Delete a review
    """
    review_to_delete = Review.query.get(reviewId)

    if review_to_delete:
        target_restaurant = Restaurant.query.get(review_to_delete.restaurant_id)
        if review_to_delete.user_id == current_user.id: #req.user.id
            db.session.delete(review_to_delete)
            db.session.commit()
            return { "message": "Delete successful!" }
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Review not found!" }, 404
