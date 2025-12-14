import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  //First Load DB
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  function getProduct(id) {
    try {
      const product = products.find((p) => p.id == id);
      setCurrentProduct(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }

  /*async function getProduct(id) {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      setCurrentProduct(data);
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }*/

  const filtred = products.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  function getFiltred(input) {
    setSearch(input);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        filtred,
        getProduct,
        loading,
        currentProduct,
        getFiltred,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  return context;
}
export { ProductProvider, useProducts };
