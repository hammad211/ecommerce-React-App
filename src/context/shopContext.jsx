import React, { createContext, useState } from 'react';
import all_product from '../components/assets/Ecommerce_Frontend_Assets/Assets/all_product';
export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;      
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems, setCartItem] = useState(getDefaultCart());
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let total = 0;
    
        for (const itemId in cartItems) {
            if (cartItems.hasOwnProperty(itemId)) { // Ensure itemId is a direct property of cartItems
    
                const quantity = cartItems[itemId]; // Get the quantity of the current item
    
                if (quantity > 0) {
                    const itemInfo = all_product.find(product => product.id === Number(itemId));
                    if (itemInfo) { // Check if itemInfo exists
                        total += itemInfo.new_price * quantity;
                    } else {
                        console.log(`Item with id ${itemId} not found in all_product array.`);
                    }
                }
            }
        }
        return total;
    }
    
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;

    }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
                {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;