from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class ShoppingCart(db.Model):
    __tablename__ = 'shopping_carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=True)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("menu_items.id")), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationship
    user = db.relationship("User", back_populates="shopping_cart")
    menu_item = db.relationship("MenuItem", back_populates="shopping_cart")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            "item_id": self.menu_item_id,
            "quantity": self.quantity,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
