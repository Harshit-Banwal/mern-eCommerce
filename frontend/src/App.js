import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
import SigninScreen from './Screen/SigninScreen';
import ShippingScreen from './Screen/ShippingScreen';
import SignupScreen from './Screen/SignupScreen';
import PaymentScreen from './Screen/PaymentScreen';
import ProfileScreen from './Screen/ProfileScreen';
import ProtectedRoute from './components/ProtectedRoute';
import PlaceOrderScreen from './Screen/PlaceOrderScreen';
import OrderScreen from './Screen/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column main-screen">
        <ToastContainer position="bottom-center" limit={1} />
        <header id="header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              }
            />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
