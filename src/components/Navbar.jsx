import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-amber-300 p-5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Navbar;
