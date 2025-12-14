import { useState } from "react";
import { useProducts } from "../contexts/ProductContex";
import ProductThumbnail from "./ProductThumbnail";
import SearchBar from "./SearchBar";
import Button from "./Button";
import styles from "./ProductList.module.css";

function ProductList() {
  const { loading, filtred, getFiltred, products } = useProducts();
  const [sortBy, setSortBy] = useState("name");

  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ];

  const sortedProducts = [...filtred].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className={`${styles.container} container`}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Our Products</h1>
          <span className={styles.productCount}>
            {sortedProducts.length}{" "}
            {sortedProducts.length === 1 ? "product" : "products"}
          </span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className={styles.searchSection}>
        <SearchBar handler={getFiltred} />

        {/* Sort Options */}
        <div className={styles.filters}>
          <span
            style={{
              fontSize: "var(--font-size-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text-secondary)",
            }}
          >
            Sort by:
          </span>
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`${styles.filterButton} ${
                sortBy === option.value ? styles.active : ""
              }`}
              onClick={() => setSortBy(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}>
            <div
              className="ios-loading"
              style={{ width: "48px", height: "48px" }}
            ></div>
          </div>
          <span className={styles.loadingText}>
            Loading amazing products...
          </span>
        </div>
      )}

      {/* Products Grid */}
      {!loading && sortedProducts.length > 0 && (
        <div className={styles.grid}>
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <ProductThumbnail product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && sortedProducts.length === 0 && products.length > 0 && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className={styles.emptyTitle}>No products found</h3>
          <p className={styles.emptyText}>
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
        </div>
      )}

      {/* No Products State */}
      {!loading && products.length === 0 && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
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
          <h3 className={styles.emptyTitle}>No products available</h3>
          <p className={styles.emptyText}>
            We're working on adding amazing products. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
