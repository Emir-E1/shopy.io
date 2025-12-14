import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContex";
import Button from "./../components/Button";
import { useCart } from "../contexts/cartContext";
import { useCartStatus } from "../utils/useCartStatus";

function ProductItem() {
  const { id } = useParams();
  const { currentProduct, loading, getProduct, products } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const { isInCart } = useCartStatus(currentProduct.id);

  useEffect(() => {
    if (id && products.length > 0) {
      getProduct(id);
    } else if (id) {
      console.log("Products not loaded yet, waiting...");
    }
  }, [id, getProduct, products]);

  if (loading || !currentProduct || !currentProduct.id) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <h1>{currentProduct.name}</h1>
      <p>{currentProduct.description}</p>
      <span>${currentProduct.price}</span>
      <img
        src={currentProduct.images[0] || "/placeholder.png"}
        alt={currentProduct.name}
      />
      <Button
        onClick={() =>
          isInCart ? removeFromCart(currentProduct) : addToCart(currentProduct)
        }
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
}

export default ProductItem;
