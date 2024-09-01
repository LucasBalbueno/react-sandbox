import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    let CartList = [];

    const addCart = (itemName) => {
        CartList.push(itemName);
    }
    
    return <CartContext.Provider value={{CartList, addCart}}>{children}</CartContext.Provider>
}