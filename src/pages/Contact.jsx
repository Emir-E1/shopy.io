import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <form>
          <span>Name</span>
          <input type="text" />
          <span>Last Name</span>
          <input type="text" />
          <textarea>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            veniam quos cupiditate dolor ipsa, voluptatum sequi quis officia,
            illum est error vitae dicta incidunt explicabo distinctio
            praesentium at molestiae quaerat.
          </textarea>
          <Button>Submit</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
