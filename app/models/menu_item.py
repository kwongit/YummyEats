from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    restaurantId = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    imageUrl = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime)
    updated_at = db.Column(db.DateTime, default=datetime)

    def to_dict(self):
        return {
            'id': self.id,
            'restaurantId': self.restaurantId,
            'name': self.name,
            'calories': self.calories,
            'price': self.price,
            'description': self.description,
            'imageUrl': self.imageUrl,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
