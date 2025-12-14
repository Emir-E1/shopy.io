import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";

function Cart() {
  return (
    <div>
      <Header />
      <main>
        {" "}
        <CartList />{" "}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
