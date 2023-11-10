import React from "react";
import { useContext } from "react";
import { RestaurantContext } from "../../context/Restaurant-context";
import { useSelector } from "react-redux";
import "./CartItem.css";

export const CartItem = (props) => {
  // const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
  // const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  // const menuItems = Object.values(getMenuItems);
  const { id, name, price, imageUrl } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(RestaurantContext);
  // console.log("cart  item in context ====>+>=>=>=>", cartItems);

  return (
    <div>
      <div
        className="cart-item-tile-container"
        // key={id}
      >
        <img
          className="cart-item-tile-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
        <div className="cart-item-tile-info">
          <div className="cart-item-small-name">{name}</div>
          <div className="cart-item-small-info">${price.toFixed(2)}</div>
          <div className="count-handler">
            <button className="quantity-btn" onClick={() => removeFromCart(id)}>
              {" "}
              -{" "}
            </button>
            {/* <input
                        value={CartItems[id] ? parseInt(CartItems[id], 10) : 0}
                        /> */}
            {cartItems[id] && (
              <input
                value={cartItems[id] ? parseInt(cartItems[id], 10) : 0}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
            )}
            {/* <p>{CartItems} </p> */}
            <button className="quantity-btn" onClick={() => addToCart(id)}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
