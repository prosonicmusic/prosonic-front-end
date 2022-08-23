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
            <div>
               <h3 className="h3-title">{title}</h3>
               <h4>{author}</h4>
            </div>
         </div>
         <div className="addons">
            <h3 className="h3-addons">ADDONS</h3>
            <div className="addons-item">
               <span className="title">Stems</span>
               <span className="price">500000 T</span>
               <button className="add-btn">ADD</button>
            </div>
            <div className="addons-item">
               <span className="title">Cover</span>
               <span className="price">100000 T</span>
               <button className="add-btn">ADD</button>
            </div>
         </div>
         <div className="total">
            <span>1000000</span>
         </div>
         <div className="remove-btn">
            {quantity === 1 && (
               <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
                <AiOutlineClose />
               </button>
            )}
         </div>
      </div>
   );
}

export default Cart;
