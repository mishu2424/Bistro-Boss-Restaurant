import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [carts] = useCart();
  const [isAdmin] = useAdmin();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order"}>Order</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to={"/auth/login"}>Login</NavLink>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <NavLink to={"/dashboard/adminHome"}>Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to={"/dashboard/userHome"}>Dashboard</NavLink>
        </li>
      )}
      {user && (
        <li>
          <Link to={isAdmin ? `/dashboard/users` : `/dashboard/cart`}>
            <div className="bg-transparent text-white flex items-center gap-2">
              <FaShoppingCart />
              <div className="badge badge-sm badge-secondary">
                +{carts.length}
              </div>
            </div>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 custom-navbar-bg text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex flex-col">
          <a className="font-bold text-base md:text-xl">BISTRO BOSS</a>
          <h1 className="text-base md:text-xl font-bold tracking-widest">
            R e s t a u r a n t
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
