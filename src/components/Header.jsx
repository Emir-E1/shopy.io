import CartIcon from "./CartIcon";
import Logo from "./Logo";
import NavBar from "./NavBar";
//Add Dark Light Mode Button
function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <CartIcon />
    </header>
  );
}

export default Header;
