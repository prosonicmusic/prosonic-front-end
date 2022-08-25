import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "./shared/Cart";

// Context
import { CartContext } from "../context/CartContextProvider";
import Navbar from "./shared/Navbar";
import Player from "./Player";

const ShopCart = () => {
   const { state, dispatch } = useContext(CartContext);
   console.log(state.total);

   return (
      <>
         <Navbar />
         <div id="shopCart">
            <div className="cart-review">
               <h1 className="h1-title">Shopping Cart</h1>
               <div className="all-items">
                  {state.selectedItems.map((item) => (
                     <Cart key={item.id} data={item} />
                  ))}
               </div>
            </div>
            <div className="cart-sum">
               <h2 className="title">Checkout</h2>
               <div>
                  {state.itemsCounter > 0 && (
                     <div>
                        <p className="total">
                           <span>Total Items:</span>
                           <span>{state.itemsCounter}</span> 
                        </p>
                        <p className="total">
                           <span>Total amount:</span>
                           <span>{state.total} T</span>
                        </p>
                        <label className="agree-terms">
                           <input type="checkbox" />
                           <p>I agree to the Transfer of Rights agreement for each product ordered</p>
                        </label>
                        <div className="buttons">
                           <button onClick={() => dispatch({ type: "CHECKOUT" })} className="checkoutBtn">Checkout</button>
                           <button onClick={() => dispatch({ type: "CLEAR" })} className="clearBtn">Clear All</button>
                        </div>
                     </div>
                  )}

                  {state.checkout && (
                     <div className="no-item">
                        <h3 className="success">Checked Out Successfully</h3>
                        <Link className="link" to="/">Buy More</Link>
                     </div>
                  )}

                  {!state.checkout && state.itemsCounter === 0 && (
                     <div className="no-item">
                        <h3 className="buy-more">Want to Buy?</h3>
                        <Link className="link" to="/">Go Back to Products</Link>
                     </div>
                  )}
               </div>
            </div>
         </div>
         <Player />
      </>
   );
};

export default ShopCart;
