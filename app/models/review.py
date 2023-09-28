from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin
from datetime import datetime

class Review(db.Model, UserMixin):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id"), ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    review = db.Column(db.String(255),nullable=False)
    stars = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationships
    restaurant = db.relationship("Restaurant", back_populates = "reviews")
    user = db.relationship("User", back_populates = "review")

    def to_dict(self):
        return {
            'id': self.id,
            'restaurant_id': self.restaurant_id,
            'user_id': self.user_id,
            'review': self.review,
            'stars': self.stars,
            'restaurant_name': self.restaurant.name,
            'user': self.user.username,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
