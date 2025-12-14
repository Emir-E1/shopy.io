import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useCart } from "../contexts/cartContext";
import styles from "./Header.module.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuth: isAuthenticated, logout } = useAuth();
  const { count } = useCart();
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate("/");
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop", protected: true },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
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
          Shopy
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map(
            (item) =>
              (!item.protected || isAuthenticated) && (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
          )}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Cart Button */}
          <button
            className={styles.cartButton}
            onClick={() => navigate("/cart")}
            aria-label={`Shopping cart with ${count} items`}
          >
            <svg
              className={styles.cartIcon}
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
            {count > 0 && (
              <span className={styles.cartBadge}>
                {count > 99 ? "99+" : count}
              </span>
            )}
          </button>

          {/* Auth Button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className={`${styles.navLink} ${styles.authButton}`}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Login
            </NavLink>
          )}

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${
              mobileMenuOpen ? styles.open : ""
            }`}
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ""}`}
        >
          <div className={styles.mobileNavList}>
            {navItems.map(
              (item) =>
                (!item.protected || isAuthenticated) && (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
            )}
            {isAuthenticated && (
              <button onClick={handleLogout} className={styles.mobileNavLink}>
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
