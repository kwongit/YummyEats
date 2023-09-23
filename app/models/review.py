from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    restaurantId = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    review = db.Column(db.String(255),nullable=False)
    stars = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime)
    updated_at = db.Column(db.DateTime, default=datetime)

#relationships

    restaurant = db.relationship("Restaurant", back_populates = "review_restaurant")

    user = db.relationship("User", back_populates = "review_user")
