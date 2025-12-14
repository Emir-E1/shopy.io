/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
// This file is JavaScript with JSX, not TypeScript
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "cart/loading":
      return {
        ...state,
        loading: true,
      };
    case "cart/add":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          loading: false,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
        loading: false,
        count: state.count + 1,
      };

    case "cart/delete":
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
        count: state.count - 1,
        total: state.total - action.payload.price,

        loading: false,
      };

    case "cart/clear":
      return {
        ...state,
        items: [],
        count: 0,
        loading: false,
      };

    default:
      return state;
  }
}

const initialCart = {
  items: [],
  count: 0,
  total: 0,
  loading: false,
  error: false,
};

function CartProvider({ children }) {
  const [{ items, count, total, loading, error }, dispatch] = useReducer(
    cartReducer,
    initialCart
  );
  const [search, setSearch] = useState("");

  function handleCart(action, item) {
    dispatch({ type: "cart/loading" });

    if (action === "add") {
      dispatch({ type: "cart/add", payload: item });
    }

    if (action === "delete") {
      dispatch({ type: "cart/delete", payload: item });
    }

    if (action === "clear") {
      dispatch({ type: "cart/clear" });
    }
  }
  const addToCart = (item) => dispatch({ type: "cart/add", payload: item });

  const removeFromCart = (item) =>
    dispatch({ type: "cart/delete", payload: item });

  const clearCart = () => dispatch({ type: "cart/clear" });

  const filtred = items.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  function getFiltred(input) {
    setSearch(input);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        loading,
        handleCart,
        getFiltred,
        filtred,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
