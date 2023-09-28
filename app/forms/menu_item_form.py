from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, URLField, IntegerField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Length, URL, NumberRange, ValidationError, Optional
from flask_wtf.file import FileField, FileAllowed, FileRequired

# def my_url_validator(form, field):
#     if ".jpeg" not in field.data and ".jpg" not in field.data and ".png" not in field.data:
#         raise ValidationError("URL must contain .jpeg, .jpg, or .png")

class MenuItemForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    size = StringField("Size")
    calories = IntegerField("Calories", validators=[Optional()])
    price = FloatField("Price", validators=[DataRequired(), NumberRange(min=0, max=10000, message="Price must be between 0 and 10,000 USD!")])
    description = TextAreaField("Description")
    image_url = URLField("Menu Item Image")
    submit = SubmitField("Create Menu Item")
