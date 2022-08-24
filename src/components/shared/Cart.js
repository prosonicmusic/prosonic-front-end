import React, { useContext } from "react";

// Context
import { CartContext } from "../../context/CartContextProvider";

// assets
import { AiOutlineClose } from "react-icons/ai";

function Cart(props) {
   const { dispatch } = useContext(CartContext);
   const {
      id,
      title,
      author,
      thumbnail,
      tag,
      product_price,
      stem_price,
      cover_price,
      quantity,
      product_type,
   } = props.data;

   return (
      <>
         <div id="cart">
            <div className="item">
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
               </div>
               <div className="detail">
                  <h3 className="h3-title">{title}</h3>
                  <h4 className="author">{author}</h4>
                  <div className="id">
                     <h5 className="id-title">ID</h5>
                     <h5>{id}</h5>
                  </div>
               </div>

               <div className="total">
                  <h4>amount:</h4>
                  <span>{product_price} T</span>
               </div>
               <div className="remove-btn">
                  {quantity === 1 && (
                     <button
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}
                        className="closeCross"
                     >
                        <AiOutlineClose />
                     </button>
                  )}
               </div>
            </div>

            {product_type !== "Package" && (
               <div className="addons">
                  <h3 className="h3-addons">ADDONS</h3>
                  <div className="addons-item">
                     <span className="title">Stems</span>
                     <div>
                        <span className="price">{stem_price} T</span>
                        <button className="add-btn">ADD</button>
                     </div>
                  </div>
                  <div className="addons-item">
                     <span className="title">Cover</span>
                     <div>
                        <span className="price">{cover_price} T</span>
                        <button className="add-btn">ADD</button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </>
   );
}

export default Cart;
