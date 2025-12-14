import { useCart } from "../contexts/cartContext";
import Button from "./Button";
import CartItem from "./CartItem";
import SearchBar from "./SearchBar";

function CartList() {
  const { filtred, getFiltred, total, count, handleCart } = useCart();

  return (
    <div>
      <h2>Votre panier ({count} articles)</h2>
      <SearchBar handler={getFiltred} />
      <Button onClick={() => handleCart("clear")}>Clear Cart </Button>
      <div>
        {filtred.length > 0 ? (
          filtred.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
      <div> {total} </div>
    </div>
  );
}

export default CartList;
