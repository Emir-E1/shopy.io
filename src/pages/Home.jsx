import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main>
        <section>
          <img />
        </section>{" "}
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
            sed architecto deserunt corporis nostrum sunt temporibus odit, earum
            minima dolore cupiditate saepe atque eos reiciendis esse repudiandae
            neque? Itaque.
          </p>
          <Button onClick={() => navigate("/shop")}>Shop Now !</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
