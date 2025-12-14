import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import styles from "./App.module.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/variables.css";
import { ProductProvider } from "./contexts/ProductContex";
import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductItem = lazy(() => import("./components/ProductItem"));
const PaymentPopUp = lazy(() => import("./components/PaymentPopUp"));

const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className={styles.loading}>
              <div className={styles.loadingSpinner}>
                <div className="ios-loading"></div>
                <span className={styles.loadingText}>Loading Shopy...</span>
              </div>
            </div>
          }
        >
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
    </div>
  );
}

export default App;
