from flask import Blueprint, request
from app.models import MenuItem, ShoppingCart
from datetime import date
from ..models.db import db
from flask_login import current_user, login_required
from ..forms.shopping_cart_form import ShoppingCartForm

shopping_cart_routes = Blueprint('shopping_cart', __name__)


@shopping_cart_routes.route('/')
@login_required
def get_cart_contents():
    """
    Route to retrieve the contents of the user's cart
    """
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).all()

    shopping_cart_items = []
    shopping_cart_subtotal = 0

    for shopping_cart_item in shopping_cart:
        menu_item = MenuItem.query.get(shopping_cart_item.menu_item_id)
        subtotal = menu_item.price * shopping_cart_item.quantity
        subtotal = round(subtotal, 2)

        shopping_cart_items.append({
            "item_id": menu_item.id,
            "item_name": menu_item.name,
            "quantity": shopping_cart_item.quantity,
            "price": menu_item.price,
            "subtotal": subtotal
        })
        shopping_cart_subtotal += subtotal

    shopping_cart_subtotal = round(shopping_cart_subtotal, 2)

    return {"shopping_cart_items": shopping_cart_items, "shopping_cart_subtotal": shopping_cart_subtotal}


@shopping_cart_routes.route('/cart_items')
@login_required
def get_cart_items():
    """
    Route to retrieve the user's cart items
    """
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).all()

    cart_items_list = [cart_item.to_dict() for cart_item in shopping_cart]

    return {"cart_items": cart_items_list}


@shopping_cart_routes.route('/add', methods=['POST'])
@login_required
def add_item_to_cart():
    """
    Route to add item to user's cart
    """
    form = ShoppingCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        quantity = data['quantity']
        menu_item_id = data['menu_item_id']

        item = MenuItem.query.get(menu_item_id)

        if not item:
            return {"message": "Item not found!"}, 404

        cart_item = ShoppingCart.query.filter_by(user_id=current_user.id, menu_item_id=menu_item_id).first()

        if cart_item:
            cart_item.quantity += quantity
        else:
            cart_item = ShoppingCart(user_id=current_user.id, menu_item_id=menu_item_id, quantity=quantity)

            db.session.add(cart_item)

        db.session.commit()
        return {"message": "Item added to cart successfully!"}
    else:
        return {"errors": form.errors}, 400


@shopping_cart_routes.route('/remove/<int:cart_id>', methods=['DELETE'])
@login_required
def remove_item_from_cart(cart_id):
    """
    Route to remove item from the shopping cart
    """
    form = ShoppingCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        menu_item_id = data['menu_item_id']

        cart_item = ShoppingCart.query.get(cart_id)

        if not cart_item:
            return {"message": "Item not found in cart!"}, 404

        db.session.delete(cart_item.menu_item_id)
        db.session.commit()

        return {"message": "Item removed from cart successfully!"}
    else:
        return {"errors": form.errors}, 400


@shopping_cart_routes.route('/clear', methods=['DELETE'])
@login_required
def clear_cart():
    """
    Route to clear all items from the shopping cart
    """
    cart_items = ShoppingCart.query.filter_by(user_id=current_user.id).all()

    for item in cart_items:
        db.session.delete(item)

    db.session.commit()
    return {"message": "Cart has been cleared!"}
