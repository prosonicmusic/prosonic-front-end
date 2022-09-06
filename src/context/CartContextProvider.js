import React, { useReducer, createContext } from "react";
import { useEffect } from "react";

const initialState = {
   selectedItems: [],
   itemsCounter: 0,
   total: 0,
   checkout: false,
};

const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("products")) || initialValue;

const sumItems = (items) => {
   const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
   const total = items.reduce(
      (total, product) => total + product.product_price * product.quantity,
      0
   );
   return { itemsCounter, total };
};

const cartReducer = (state, action) => {
   console.log(action.type);
   console.log(state.total);
   switch (action.type) {
      case "ADD_ITEM":
         if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
            state.selectedItems.push({
               ...action.payload,
               quantity: 1,
            });
         }
         return {
            ...state,
            selectedItems: [...state.selectedItems],
            ...sumItems(state.selectedItems),
            checkout: false,
         };
      case "REMOVE_ITEM":
         const newSelectedItems = state.selectedItems.filter(
            (item) => item.id !== action.payload.id
         );
         return {
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(newSelectedItems),
         };
      case "CHECKOUT":
         return {
            selectedItems: [],
            itemsCounter: 0,
            total: 0,
            checkout: true,
         };
      case "CLEAR":
         return {
            selectedItems: [],
            itemsCounter: 0,
            total: 0,
            checkout: false,
         };
      default:
         return state;
   }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, initialState, initializer);

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(state))
   }, [state])

   return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
