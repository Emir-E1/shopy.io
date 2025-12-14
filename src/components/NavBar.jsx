import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
    </div>
  );
}

export default NavBar;
