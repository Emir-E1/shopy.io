import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const { isAuth, handleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  if (isAuth) {
    navigate("/shop");
    return null;
  }

  const handleLoginSuccess = () => {
    setIsLoading(false);
    navigate("/shop");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Back to Home */}
          <Link to="/" className={styles.backToHome}>
            <svg
              className={styles.backIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          {/* Welcome Section */}
          <div className={styles.welcome}>
            <div className={styles.logo}>
              <svg
                className={styles.logoIcon}
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
            <h1 className={styles.title}>Welcome to Shopy</h1>
            <p className={styles.subtitle}>
              Sign in to your account to continue shopping and discover amazing
              products
            </p>
          </div>

          {/* Login Card */}
          <div className={styles.loginCard}>
            <LoginForm
              onSuccess={handleLoginSuccess}
              loginFunction={handleLogin}
              onSwitchToRegister={() => navigate("/register")}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
