import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContex";
import Button from "./../components/Button";
import { useCart } from "../contexts/cartContext";
import { useCartStatus } from "../utils/useCartStatus";
import styles from "./ProductItem.module.css";

function ProductItem() {
  const { id } = useParams();
  const { currentProduct, loading, getProduct, products } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const { isInCart } = useCartStatus(currentProduct?.id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (id && products.length > 0) {
      getProduct(id);
      setSelectedImageIndex(0); // Reset to first image when product changes
    } else if (id) {
      console.log("Products not loaded yet, waiting...");
    }
  }, [id, getProduct, products]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={`${styles.container} container`}>
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}>
              <div
                className="ios-loading"
                style={{ width: "48px", height: "48px" }}
              ></div>
            </div>
            <span className={styles.loadingText}>
              Loading product details...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!currentProduct || !currentProduct.id) {
    return (
      <div className={styles.page}>
        <div className={`${styles.container} container`}>
          <div className={styles.error}>
            <div className={styles.errorIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9V11M12 15H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.errorTitle}>Product Not Found</h3>
            <p className={styles.errorText}>
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  const images = currentProduct.images || ["/placeholder.png"];
  const specifications = [
    { label: "Category", value: currentProduct.category || "General" },
    { label: "Price", value: `$${currentProduct.price?.toFixed(2) || "0.00"}` },
    { label: "Stock", value: currentProduct.stock || "Available" },
    { label: "Rating", value: currentProduct.rating || "4.5/5" },
  ];

  return (
    <div className={styles.page}>
      <div className={`${styles.container} container`}>
        <div className={styles.productContainer}>
          {/* Section Images - Gauche */}
          <div className={styles.imageSection}>
            {/* Image principale */}
            <div className={styles.mainImageContainer}>
              <img
                src={images[selectedImageIndex] || "/placeholder.png"}
                alt={currentProduct.name}
                className={styles.mainImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Vignettes si plusieurs images */}
            {images.length > 1 && (
              <div className={styles.thumbnailGrid}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnailContainer} ${
                      selectedImageIndex === index ? styles.active : ""
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={image || "/placeholder.png"}
                      alt={`${currentProduct.name} ${index + 1}`}
                      className={styles.thumbnail}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section Détails - Droite */}
          <div className={styles.detailsSection}>
            {/* En-tête avec titre et prix */}
            <div className={styles.header}>
              <h1 className={styles.title}>{currentProduct.name}</h1>
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
                ${currentProduct.price?.toFixed(2) || "0.00"}
              </div>
            </div>

            {/* Description */}
            <p className={styles.description}>
              {currentProduct.description ||
                "No description available for this product."}
            </p>

            {/* Spécifications */}
            <div className={styles.specifications}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                {specifications.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}:</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions - Boutons */}
            <div className={styles.actions}>
              <button
                className={`${styles.mainAction} ${
                  isInCart ? styles.remove : ""
                }`}
                onClick={() =>
                  isInCart
                    ? removeFromCart(currentProduct)
                    : addToCart(currentProduct)
                }
              >
                {isInCart ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Remove from Cart
                  </>
                ) : (
                  <>
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
                    Add to Cart
                  </>
                )}
              </button>

              <button className={styles.secondaryAction}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.84 4.61C20.3292 4.09905 19.7228 3.69375 19.0554 3.41716C18.3879 3.14057 17.6725 2.99832 16.95 2.99832C16.2275 2.99832 15.5121 3.14057 14.8446 3.41716C14.1772 3.69375 13.5708 4.09905 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0328 10.6054C22.3094 9.93789 22.4517 9.22249 22.4517 8.5C22.4517 7.77751 22.3094 7.06211 22.0328 6.39466C21.7563 5.72721 21.351 5.12081 20.84 4.61Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
