from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    open_hours = db.Column(db.String, nullable=False)
    close_hours = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationship
    user = db.relationship("User", back_populates = "restaurant")
    menu_item = db.relationship("MenuItem", back_populates="restaurant", cascade="all, delete-orphan")
    review = db.relationship("Review", back_populates = "restaurant", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'name': self.name,
            'type': self.type,
            'price': self.price,
            'open_hours': self.open_hours,
            'close_hours': self.close_hours,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
