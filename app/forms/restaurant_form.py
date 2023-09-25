from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, URLField
from wtforms.validators import DataRequired, Length, URL
from flask_wtf.file import FileField, FileAllowed, FileRequired


class RestaurantForm(FlaskForm):
    address = StringField("Address", validators=[DataRequired(), Length(min=5, message="Address must have at least 5 characters!")])
    city = StringField("City", validators=[DataRequired(), Length(min=3, message="City must have at least 3 characters!")])
    state = StringField("State", validators=[DataRequired(), Length(min=2, message="State must be at least 2 characters!")])
    name = StringField("Restaurant Name", validators=[DataRequired(), Length(min=1, message="Restaurant name must have at least 1 character!")])
    type = StringField("Restaurant Type", validators=[DataRequired(), Length(min=3, message="Restaurant type must have at least 3 characters!")])
    price = StringField("Price", validators=[DataRequired(), Length(min=1, message="Price must have at least 1 dollar sign")])
    open_hours = StringField("Open Hours", validators=[DataRequired(), Length(min=4, message="Opening hours must have at least 4 characters!")])
    close_hours = StringField("Closing Hour", validators=[DataRequired(), Length(min=4, message="Closing hours must have at least 4 characters!")])
    image_url = URLField("Restaurant image", validators=[DataRequired()])
    submit = SubmitField("Create Restaurant")
