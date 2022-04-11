import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import {Route , BrowserRouter , Routes} from 'react-router-dom';
import PackagesPage from './pages/PackagesPage';
import ServicesPage from './pages/ServicesPage';
import TracksPage from './pages/TracksPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';

function App() {
  return (
    <>

          <BrowserRouter>
              <Routes>

                    <Route path='/' exact element = {<HomePage/>} />
                    <Route path='/tracks' exact element = {<TracksPage/>} />
                    <Route path='/packages' exact element = {<PackagesPage/>} />
                    <Route path='/services' exact element = {<ServicesPage/>} />
                    <Route path='/contact' exact element = {<ContactPage />} />
                    <Route path='/login' exact element = {<LoginPage/>} />
                    <Route path='/cart' exact element = {<Cart/>} />
                   
              </Routes>
          </BrowserRouter>
        <ToastContainer className='toast'/>
    </>
  );
}

export default App;
