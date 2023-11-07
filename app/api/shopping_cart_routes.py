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
            "menu_item_id": menu_item.id,
            "menu_item_name": menu_item.name,
            "quantity": shopping_cart_item.quantity,
            "menu_item_price": menu_item.price,
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
        menu_item_id = form.data['menu_item_id']
        quantity = form.data['quantity']

        menu_item = MenuItem.query.get(menu_item_id)

        if not menu_item:
            return {"message": "Menu item not found."}, 404

        cart_item = ShoppingCart.query.filter_by(user_id=current_user.id, menu_item_id=menu_item_id).first()

        if cart_item:
            cart_item.quantity += quantity
        else:
            cart_item = ShoppingCart(user_id=current_user.id, menu_item_id=menu_item_id, quantity=quantity)
            db.session.add(cart_item)

        db.session.commit()
        return {"message": "Menu item added to cart successfully!"}
    else:
        return {"errors": form.errors}, 400


@shopping_cart_routes.route('/update/<int:menu_item_id>', methods=['PUT'])
@login_required
def update_item_in_cart(menu_item_id):
    """
    Route to update item in the shopping cart by menu_item_id
    """
    item_to_update = ShoppingCart.query.filter_by(user_id=current_user.id,menu_item_id=menu_item_id).first()

    if not item_to_update:
        return {"message": "Menu item not found in cart."}, 404

    if item_to_update.quantity >= 1:
        item_to_update.quantity += 1
    else:
      db.session.add(item_to_update)

    db.session.commit()
    return {"message": "Menu item updated successfully!"}


@shopping_cart_routes.route('/remove/<int:menu_item_id>', methods=['DELETE'])
@login_required
def remove_item_from_cart(menu_item_id):
    """
    Route to remove item from the shopping cart by menu_item_id
    """
    item_to_remove = ShoppingCart.query.filter_by(user_id=current_user.id,menu_item_id=menu_item_id).first()

    if not item_to_remove:
        return {"message": "Menu item not found in cart."}, 404

    if item_to_remove.quantity > 1:
        item_to_remove.quantity -= 1
    else:
      db.session.delete(item_to_remove)

    db.session.commit()
    return {"message": "Menu item removed successfully!"}


@shopping_cart_routes.route('/empty/<int:menu_item_id>', methods=['DELETE'])
@login_required
def remove_entire_item_from_cart(menu_item_id):
    """
    Route to remove the entire item from the shopping cart by menu_item_id
    """
    item_to_remove = ShoppingCart.query.filter_by(user_id=current_user.id,menu_item_id=menu_item_id).first()

    if not item_to_remove:
        return {"message": "Menu item not found in cart."}, 404

    db.session.delete(item_to_remove)

    db.session.commit()
    return {"message": "Entire menu item removed successfully!"}


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
