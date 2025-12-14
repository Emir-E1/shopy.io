import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContex";
import { useCart } from "../contexts/cartContext";
import styles from "./ProductThumbnail.module.css";

function ProductThumbnail({ product }) {
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();

  function handleItem() {
    getProduct(product.id);
    navigate(`/shop/product/${product.id}`);
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(product);
  }

  return (
    <div className={styles.card} onClick={handleItem}>
      <div className={styles.imageContainer}>
        <img
          src={product.images?.[0] || "/placeholder-product.png"}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}></div>
        {product.category && (
          <span className={styles.category}>{product.category}</span>
        )}
        {product.featured && <span className={styles.badge}>Featured</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.price}>
          <svg
            className={styles.priceIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ${product.price?.toFixed(2) || "0.00"}
        </div>
      </div>

      {/* Quick Add to Cart Button */}
      <button
        className={styles.quickAdd}
        onClick={handleAddToCart}
        aria-label={`Add ${product.name} to cart`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductThumbnail;
