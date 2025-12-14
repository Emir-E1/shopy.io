import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import Modal from "./Modal";
import Button from "./Button";
import styles from "./PaymentPopup.module.css";

function PaymentPopup({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      onClose();
      // Navigate to success page or show success message
      navigate("/shop");
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Payment Confirmation"
      size="small"
    >
      <div className={styles.content}>
        {/* Order Summary */}
        <div className={styles.summary}>
          <div className={styles.summaryIcon}>
            <svg
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
          </div>
          <h4>Ready to Pay?</h4>
          <p>You're about to complete your purchase securely.</p>
          <div className={styles.total}>
            <span>Total Amount:</span>
            <span className={styles.amount}>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Button variant="ghost" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button
            onClick={handlePayment}
            loading={isProcessing}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Proceed Payment"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentPopup;
