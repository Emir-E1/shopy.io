import { useCart } from "../contexts/cartContext";

export function useCartStatus(productId) {
  const { items } = useCart();
  const isInCart = items.some((item) => item.id === productId);
  return { isInCart };
}
