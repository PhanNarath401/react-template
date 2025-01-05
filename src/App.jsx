import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Shop } from './page/Shop';
import { Men } from './page/Men';
import { Women } from './page/Women';
import { LoginSignup } from './page/LoginSignup';
import { Kids } from './page/Kids';
import { Cart } from "./page/cart";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <main>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
      
    </main>
  );
}

export default App;
