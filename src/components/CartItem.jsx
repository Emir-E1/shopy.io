import { useCart } from "../contexts/cartContext";
import Button from "./Button";

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div>
      <div>
        <img src={item.images[0]} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span>${item.price}</span>
        </div>
      </div>
      <Button onClick={() => removeFromCart(item)}>Remove</Button>
    </div>
  );
}

export default CartItem;
