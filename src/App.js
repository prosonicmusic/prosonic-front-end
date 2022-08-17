import HomePage from "./pages/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import TracksPage from "./pages/TracksPage";

// Components
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/Cart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
   return (
      <ProductContextProvider>
         <CartContextProvider>
            <Routes>
               <Route path="/tracks" element={<TracksPage />} />
               <Route path="/tracks/:id" element={<ProductDetails />} />
               <Route path="/" exact element={<HomePage />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
         </CartContextProvider>
      </ProductContextProvider>
   );
}
export default App;
