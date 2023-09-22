from .db import db, environment, SCHEMA, add_prefix_for_prod


class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)



    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
