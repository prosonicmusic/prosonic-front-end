import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "./shared/Cart";

// Context
import { CartContext } from "../context/CartContextProvider";
import Navbar from "./shared/Navbar";

const ShopCart = () => {
   const { state, dispatch } = useContext(CartContext);
   console.log(state.total);

   return (
      <div id="shopCart">
         <Navbar />
         <h1>Shopping Cart</h1>
         <div>
            {state.selectedItems.map((item) => (
               <Cart key={item.id} data={item} />
            ))}
         </div>

         <div>
            <div>
               <h1>TRANSFER OF RIGHTS AGREEMENT</h1>
               <p></p>
               <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
            <label>
               <input type="checkbox" />
               <p>I agree to the Transfer of Rights agreement for each track ordered</p>
            </label>
         </div>
         <div>
            {state.itemsCounter > 0 && (
               <div>
                  <p>
                     <span>Total Items:</span> {state.itemsCounter}
                  </p>
                  <p>
                     <span>Total amount:</span> {state.total} T
                  </p>
                  <div>
                     <button onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
                     <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                  </div>
               </div>
            )}

            {state.checkout && (
               <div>
                  <h3>Checked Out Successfully</h3>
                  <Link to="/">Buy More</Link>
               </div>
            )}

            {!state.checkout && state.itemsCounter === 0 && (
               <div>
                  <h3>Want to Buy?</h3>
                  <Link to="/">Go Back to Products</Link>
               </div>
            )}
         </div>
      </div>
   );
};

export default ShopCart;
