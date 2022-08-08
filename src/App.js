import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PackagesPage from "./pages/PackagesPage";
import ServicesPage from "./pages/ServicesPage";
import TracksPage from "./pages/TracksPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import AboutPage from "./pages/AboutPage";
import Jobs from "./pages/Jobs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<HomePage />} />
               <Route path="/tracks" exact element={<TracksPage />} />
               <Route path="/packages" exact element={<PackagesPage />} />
               <Route path="/services" exact element={<ServicesPage />} />
               <Route path="/contact" exact element={<ContactPage />} />
               <Route path="/login" exact element={<LoginPage />} />
               <Route path="/cart" exact element={<Cart />} />
               <Route path="/forgot-password" exact element={<ForgotPassword />} />
               <Route path="/about" exact element={<AboutPage />} />
               <Route path="/jobs" exact element={<Jobs />} />
               <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
               <Route path="/terms" exact element={<Terms />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}
export default App;
