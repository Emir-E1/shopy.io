import { useCart } from "../contexts/cartContext";

function CartIcon() {
  const { count } = useCart();
  return <div>{count}</div>;
}

export default CartIcon;
