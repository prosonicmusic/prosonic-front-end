import HomePage from "./pages/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import TracksPage from "./pages/TracksPage";
import PackagesPage from "./pages/PackagesPage";
import ContactPage from "./pages/ContactPage";

// Components
import ProductDetails from "./components/products/ProductDetails";
import ShopCart from "./components/ShopCart";
import ServicesPage from "./pages/ServicesPage";

// Context
import CartContextProvider from "./context/CartContextProvider";
import TrackContextProvider from "./context/TrackContextProvider";
import PackageContextProvider from "./context/PackageContextProvider";
import Player from "./components/player/Player";

function App() {
   return (
      <TrackContextProvider>
         <PackageContextProvider>
            <CartContextProvider>
               <Routes>
                  <Route path="/tracks" element={<TracksPage />} />
                  <Route path="/tracks/:id" element={<ProductDetails />} />
                  <Route path="/packages" element={<PackagesPage />} />
                  <Route path="/cart" element={<ShopCart />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/*" element={<Navigate to="/" />} />
               </Routes>
               <Player />
            </CartContextProvider>
         </PackageContextProvider>
      </TrackContextProvider>
   );
}
export default App;
