from flask import Blueprint, request, jsonify
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

    return jsonify({"shopping_cart_items": shopping_cart_items, "shopping_cart_subtotal": shopping_cart_subtotal})


@shopping_cart_routes.route('/cart_items')
@login_required
def get_cart_items():
    """
    Route to retrieve the user's cart items
    """
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).all()
    cart_items_list = [cart_item.to_dict() for cart_item in shopping_cart]

    return jsonify({"cart_items": cart_items_list})

# # We can actually remove this route and restrict it to only logged in users
# # It returns the same as above
# @shopping_cart_routes.route('/all_carts')
# def get_all_carts():
#     """
#     Route to retrieve all shopping carts
#     """
#     shopping_carts = ShoppingCart.query.all()
#     shopping_carts_list = []

#     for cart in shopping_carts:
#         cart_dict = cart.to_dict()
#         shopping_carts_list.append(cart_dict)

#     return jsonify({"shopping_carts": shopping_carts_list})


@shopping_cart_routes.route('/add/<int:item_id>', methods=['POST'])
@login_required
def add_item_to_cart(item_id):
    """
    Route to add item to user's cart
    """
    form = ShoppingCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        quantity = data['quantity']

        item = MenuItem.query.get(item_id)

        if not item:
            return jsonify({"message": "Item not found!"}), 404

        cart_item = ShoppingCart.query.filter_by(user_id=current_user.id, menu_item_id=item_id).first()

        if cart_item:
            cart_item.quantity += quantity
        else:
            cart_item = ShoppingCart(user_id=current_user.id, menu_item_id=item_id, quantity=quantity)

            db.session.add(cart_item)
        db.session.commit()

        return jsonify({"message": "Item added to cart successfully!"})

    else:
        return jsonify({"errors": form.errors}), 400


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
    return jsonify({"message": "Cart has been cleared!"})
