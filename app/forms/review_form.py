from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


class ReviewForm(FlaskForm):
    review = StringField("Review", validators=[DataRequired(), Length(min=1, message="Review must have at least 1 character!")])
    stars = IntegerField("Stars", validators=[DataRequired(), NumberRange(min=1, max=5, message="Star reviews must be between 1 and 5!")])
    submit = SubmitField("Submit Review")
