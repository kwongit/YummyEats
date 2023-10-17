from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, FileField, IntegerField, FloatField, TextAreaField
from wtforms.validators import DataRequired, NumberRange, Optional
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS


class MenuItemForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    size = StringField("Size")
    calories = IntegerField("Calories", validators=[Optional()])
    price = FloatField("Price", validators=[DataRequired(), NumberRange(min=0, max=10000, message="Price must be between 0 and 10,000 USD!")])
    description = TextAreaField("Description")
    imageUrl = FileField("Menu Item Image", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Create Menu Item")
