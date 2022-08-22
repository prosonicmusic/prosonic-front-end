import React, { useContext } from "react";

// Context
import { CartContext } from "../../context/CartContextProvider";

// assets
import { AiOutlineClose } from "react-icons/ai";

function Cart(props) {
   const { dispatch } = useContext(CartContext);
   const { id, title, author, thumbnail, tag, product_price, stem_price, cover_price, quantity } =
      props.data;

   return (
      <div id="cart">
         <div className="product">
            <div className="cover-section">
               <div>
                  <img src={thumbnail} alt="product" className="product-image" />
               </div>

               <ul className="labels">
                  <div className={tag}>
                     <li className="Prem"> PREMIUM </li>
                  </div>
               </ul>
            </div>
            <h3>{title}</h3>
            <h4>{author}</h4>
         </div>
         <div className="addons">
            <h3>ADDONS</h3>
            <div>
               <span>Stems</span>
               <span>500000</span>
               <button>ADD</button>
            </div>
            <div>
               <span>Cover</span>
               <span>100000</span>
               <button>ADD</button>
            </div>
         </div>
         <div className="total">
            <span>1000000</span>
         </div>
         <div>
            {quantity === 1 && (
               <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
                  {" "}
                  Remove{" "}
               </button>
            )}
         </div>
      </div>
   );
}

export default Cart;
