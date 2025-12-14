import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContex";
import ProductThumbnail from "./ProductThumbnail";
import SearchBar from "./SearchBar";

function ProductList() {
  const navigate = useNavigate();
  const { loading, filtred, getFiltred } = useProducts();
  return (
    <div>
      <main>
        <h2>Products List</h2>
        <SearchBar handler={getFiltred} />
        {
          /* Product list content will go here */
          !loading &&
            filtred.map((el) => <ProductThumbnail product={el} key={el.id} />)
        }
      </main>
    </div>
  );
}

export default ProductList;
