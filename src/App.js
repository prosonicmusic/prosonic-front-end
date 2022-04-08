import './App.css';
import HomePage from './pages/HomePage';
import {Route , BrowserRouter , Routes} from 'react-router-dom';
import PackagesPage from './pages/PackagesPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import TracksPage from './pages/TracksPage';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <div>

          <BrowserRouter>
              <Routes>

                    <Route path='/' exact element = {<HomePage/>} />
                    <Route path='/tracks' exact element = {<TracksPage/>} />
                    <Route path='/packages' exact element = {<PackagesPage/>} />
                    <Route path='/services' exact element = {<ServicesPage/>} />
                    <Route path='/contact' exact element = {<ContactPage />} />
                    <Route path='/register' exact element = {<RegisterPage/>} />
                    <Route path='/cart' exact element = {<Cart/>} />
                   
              </Routes>
          </BrowserRouter>

    </div>
    </>
  );
}

export default App;
