import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContex";

function ProductThumbnail({ product }) {
  const navigate = useNavigate();
  const { getProduct } = useProducts();

  function handleItem() {
    getProduct(product.id);
    navigate(`/shop/product/${product.id}`);
  }
  return (
    <div onClick={handleItem}>
      <img src={product.images[0]} />
      <h2>{product.name}</h2>
      <span>{product.price}</span>
    </div>
  );
}
export default ProductThumbnail;
