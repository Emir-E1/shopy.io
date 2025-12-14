import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import Button from "./Button";
import styles from "./LoginPopup.module.css";

function LoginPopup({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoading(false);
    onClose();
    // Redirect to shop after successful login
    navigate("/shop");
  };

  const handleLoginSubmit = async (email, password) => {
    setIsLoading(true);
    try {
      handleLogin({ email, password });
      handleLoginSuccess();
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const footer = (
    <div className={styles.footer}>
      <Button variant="ghost" onClick={onClose}>
        Cancel
      </Button>
      <Button
        onClick={() => {
          // This will be handled by the form submit
        }}
        loading={isLoading}
        disabled={isLoading}
      >
        Continue
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In to Shopy"
      footer={footer}
      size="small"
    >
      <div className={styles.content}>
        <div className={styles.welcome}>
          <div className={styles.icon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L12 2L4 7V17L12 22L20 17V7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L12 14L15 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Welcome back</h3>
          <p>Sign in to continue shopping</p>
        </div>

        <LoginForm
          onSuccess={handleLoginSuccess}
          loginFunction={handleLoginSubmit}
        />

        <div className={styles.divider}>
          <span>Don't have an account?</span>
          <button
            type="button"
            className={styles.link}
            onClick={() => {
              onClose();
              navigate("/login"); // Or open register popup
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginPopup;
