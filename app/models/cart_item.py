from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class CartItem(db.Model):
    __tablename__ = 'cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'), nullable=False)
    item_id = db.Column(db.Integer)
    quantity = db.Column(db.Integer, default=1)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationship
    cart = db.relationship('Cart', back_populates='cart_item')

    def to_dict(self):
        return {
            'id': self.id,
            'cart_id': self.cart_id,
            'item_id': self.item_id,
            'quantity': self.quantity,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
