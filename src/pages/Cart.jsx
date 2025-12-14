import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../contexts/cartContext";
import { useAuth } from "../contexts/authContext";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import SearchBar from "../components/SearchBar";
import PaymentPopup from "../components/PaymentPopUp";
import LoginPopup from "../components/LoginPopup";
import styles from "./Cart.module.css";

function Cart() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { filtred, getFiltred, total, count, handleCart } = useCart();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleCheckout = () => {
    if (!isAuth) {
      setShowLoginPopup(true);
      return;
    }

    if (count > 0) {
      setShowPaymentPopup(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginPopup(false);
    if (count > 0) {
      setShowPaymentPopup(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentPopup(false);
    navigate("/shop");
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={`${styles.container} container`}>
          {/* Cart Header */}
          <div className={styles.cartHeader}>
            <h1 className={styles.cartTitle}>
              Shopping Cart
              <span className={styles.itemCount}>
                {count} {count === 1 ? "item" : "items"}
              </span>
            </h1>
          </div>

          {/* Cart Tools */}
          <div className={styles.cartTools}>
            <div className={styles.searchSection}>
              <SearchBar handler={getFiltred} placeholder="Search in cart..." />
            </div>
            {count > 0 && (
              <button
                className={styles.clearButton}
                onClick={() => handleCart("clear")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H5H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 6V20C19 20.5304 18.7893 21 18.5 21H7.5C7.21071 21 7 20.5304 7 20V6M8 6V4C8 3.46957 8.21071 3 8.5 3H15.5C15.7893 3 16 3.46957 16 4V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Clear Cart
              </button>
            )}
          </div>

          {/* Main Content */}
          <div className={styles.cartContent}>
            {/* Cart Items Section */}
            <div className={styles.cartItemsSection}>
              <div className={styles.cartItems}>
                {filtred.length > 0 ? (
                  filtred.map((item, index) => (
                    <div
                      key={item.id}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                      }}
                    >
                      <CartItem item={item} />
                    </div>
                  ))
                ) : (
                  <div className={styles.emptyCart}>
                    <div className={styles.emptyCartIcon}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 22C7.89543 22 7 21.1046 7 20V10C7 8.89543 7.89543 8 9 8H15C16.1046 8 17 8.89543 17 10V20C17 21.1046 16.1046 22 15 22H9Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 10H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="9" cy="16" r="1" fill="currentColor" />
                        <circle cx="15" cy="16" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className={styles.emptyCartTitle}>
                      Your cart is empty
                    </h3>
                    <p className={styles.emptyCartText}>
                      Add some amazing products to get started!
                    </p>
                    <Button onClick={() => navigate("/shop")}>
                      Browse Products
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Cart Summary - Sticky */}
            {count > 0 && (
              <div className={styles.cartSummary}>
                <h3 className={styles.summaryTitle}>Order Summary</h3>

                <div className={styles.summaryItems}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Subtotal</span>
                    <span className={styles.summaryValue}>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Shipping</span>
                    <span className={styles.summaryValue}>Free</span>
                  </div>
                  <div
                    className={`${styles.summaryRow} ${styles.summaryTotal}`}
                  >
                    <span className={styles.summaryLabel}>Total</span>
                    <span className={styles.summaryValue}>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  className={styles.checkoutButton}
                  onClick={handleCheckout}
                  disabled={!isAuth}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Proceed to Payment
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Popups */}
      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />

      <PaymentPopup
        isOpen={showPaymentPopup}
        onClose={() => setShowPaymentPopup(false)}
      />
    </div>
  );
}

export default Cart;
