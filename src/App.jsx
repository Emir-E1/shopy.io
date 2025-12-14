import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { ProductProvider } from "./contexts/ProductContex";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductItem = lazy(() => import("./components/ProductItem"));
const Cart = lazy(() => import("./pages/Cart"));
const PaymentPopUp = lazy(() => import("./pages/PaymentPopUp"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route
            path="shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"product"} replace />} />
            <Route index path="product" element={<ProductList />} />
            <Route path="product/:id" element={<ProductItem />} />
          </Route>
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          >
            <Route path="payment" element={<PaymentPopUp />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
