import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Shop() {
  return (
    <div>
      <Header />
      <main>
        {/* Shop content will go here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
