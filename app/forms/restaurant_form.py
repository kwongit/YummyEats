from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, URLField, IntegerField
from wtforms.validators import DataRequired, Length, URL, NumberRange, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired


restaurant_types = [ "American", "Asian", "Breakfast and Brunch", "Cafe", "Mexican", "Pizza", "Wings", "Other" ]

hours = [
    "12:00", "12:30",
    "1:00", "1:30",
    "2:00", "2:30",
    "3:00", "3:30",
    "4:00", "4:30",
    "5:00", "5:30",
    "6:00", "6:30",
    "7:00", "7:30",
    "8:00", "8:30",
    "9:00", "9:30",
    "10:00", "10:30",
    "11:00", "11:30",
    "Open 24 hours"
    ]

def my_url_validator(form, field):
    if ".jpeg" not in field.data and ".jpg" not in field.data and ".png" not in field.data:
        raise ValidationError("URL must contain .jpeg, .jpg, or .png")


class RestaurantForm(FlaskForm):
    address = StringField("Address", validators=[DataRequired(), Length(min=5, message="Address must have at least 5 characters!")])
    city = StringField("City", validators=[DataRequired(), Length(min=3, message="City must have at least 3 characters!")])
    state = StringField("State", validators=[DataRequired(), Length(min=2, message="State must be at least 2 characters!")])
    name = StringField("Restaurant Name", validators=[DataRequired(), Length(min=1, message="Restaurant name must have at least 1 character!")])
    type = SelectField("Restaurant Type", choices=restaurant_types, validators=[DataRequired()])
    price = IntegerField("Price", validators=[DataRequired(), NumberRange(min=1, max=3, message="Price must be an integer between 1 and 3!")])
    open_hours = SelectField("Open Hours", choices=hours, validators=[DataRequired()])
    close_hours = SelectField("Closing Hour", choices=hours, validators=[DataRequired()])
    image_url = URLField("Restaurant image", validators=[DataRequired()])
    submit = SubmitField("Create Restaurant")
