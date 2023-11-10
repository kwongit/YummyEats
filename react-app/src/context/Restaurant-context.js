import React, { createContext, useState, useEffect } from 'react'
// we need
import { useSelector } from "react-redux";


export const RestaurantContext = createContext(null);

//!
// const GetDefaultCart = () => {
//     // we need to get restaurants and menuItems from the store
//     const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
//     const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
//     const menuItems = Object.values(getMenuItems); // menuitems is an array here so we can loop over it


//     ////////////////////////////////////////////////
//     let cart = {};
//     // console.log( "menuItems =useSelector ======>>>>" , menuItems)
//     if (!menuItems.length) return null;
//     // console.log("menuItems %%%%%%%%======" , menuItems[0].id)

//     for (let i = 1; i < menuItems.length + 1; i++) {
//         cart[i] = 0
//     }

//     return cart
// }
// //!

// export function RestaurantContextProvider(props) {
//     const [cartItems, setCartItems] = useState(GetDefaultCart());
//     const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
//     const menuItems = Object.values(getMenuItems); // menuitems is an array here so we can loop over it

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     const contextValue = { cartItems, addToCart, removeFromCart }
//     console.log( "GetDefaultCart +++++++++++++", GetDefaultCart())
//     console.log("cartItems =======+++++=>>>>>", cartItems)

//     useEffect(() => {
//         console.log("cartItems22222 =======+++++=>>>>>", cartItems);
//     }, [cartItems, menuItems]);

//     return (
//         <>
//             <RestaurantContext.Provider value={contextValue}>
//                 {props.children}
//             </RestaurantContext.Provider>

//         </>

//     )
// }
//! //////////////////////////////////////////////////////////////
export function RestaurantContextProvider(props) {
    const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
    const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
    const menuItems = Object.values(getMenuItems);
    // get all menu items for all restaurant
    console.log("menuItems %%%%%%%%======", menuItems)
    const [cartItems, setCartItems] = useState({}); // Initialize as an empty object
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {

        // console.log("menuitems.length ====3333333", menuItems.length)
        // console.log("menuitems ====*********", menuItems)

        if (menuItems.length > 0) {
            const defaultCart = {};
            for (let i = 0; i < menuItems.length; i++) { //! check the +1 if needed
                const itemId = menuItems[i].id;
                defaultCart[itemId] = 0;
            }
            setCartItems(defaultCart);
        }
    }, [menuItems.length,]);
    //! ///////////////////////////////////////
    useEffect(() => {

        let amount = 0
        for (let item in cartItems) {
            console.log('this is the item ====99999999', item)
            console.log('cartItems[item]====88888888', cartItems[item])
            if (cartItems[item] > 0) {

                let itemInfo = menuItems.find((oneItem) => oneItem.id === Number(item))
                console.log('this is the itemInfo @@@@@@@', itemInfo)
                amount += cartItems[item] * itemInfo.price
            }
            setTotalAmount(amount)
        }

    }, [cartItems]);
    //! /////////////////////////////////////////////////////

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    useEffect(() => {
        console.log("cartItems =======+++++=>>>>>", cartItems);
    }, [cartItems, menuItems]);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        totalAmount,
        setCartItems
    };

    return (
        <RestaurantContext.Provider value={contextValue}>
            {props.children}
        </RestaurantContext.Provider>
    );
}
