import React, { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../../context/Restaurant-context";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useHistory, useNavigate } from "react-router-dom";

export const Cart = () => {
  const history = useHistory();
  // const navigate = useNavigate()
  const getMenuItems = useSelector(
    (state) => state.menuItems.allRestaurantsMenuItems
  );
  const getCurrentMenuItems = useSelector(
    (state) => state.menuItems.allMenuItems
  );
  const currentMenuItems = Object.values(getCurrentMenuItems);
  const menuItems = Object.values(getMenuItems);
  const { cartItems, totalAmount, setCartItems } =
    useContext(RestaurantContext);
  const [pageReloaded, setPageReloaded] = useState(false);

  //! ///////////////////////////////////////////


//   if (totalAmount === 0 ) {

//             window.location.reload();
//         history.push(`/emptyCart`)

//     }

//! ///////////////////////////////////////////////////////////


    const onClick = (e) => {


          alert(` Items have been purchased`);
        //   setCartItems({})
        history.push(`/`);
        window.location.reload()


      };
    return (
        <div>
            <div className='cart-container'>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cart-items-container'>
                {menuItems.map((menuItem) => {
                    if (cartItems[menuItem.id] > 0) {
                        return < CartItem key={menuItem.id} data={menuItem} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (

                <div className='checkout'>
                    <p > subtotal: $ {totalAmount.toFixed(2)}</p>
                    <div className='checkout-buttons'>
                        <button
                        onClick={onClick}
                        >Checkout</button>
                        <button
                            onClick={() => history.push(`/restaurants/${currentMenuItems[0].restaurantId}`)}
                        >Continue Shopping</button>
                    </div>
                </div>

            ) : (
            <div id='empty-cart'>
                <h3 > Your cart is Empty.. </h3>
                {
            <>
              {window.location.reload()}
              {history.push(`/`)}
            </>
          }

            </div>)}



    </div>
  );
};
