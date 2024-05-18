import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "../App.css";
import { CartState } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="link-tags">
            <span>B</span>hargava
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="routes">
          <Link to="/cart" className="link-tags">
            <FaShoppingCart
              style={{ marginRight: "1rem" }}
              size="2rem"
              color="#fff"
            />
          </Link>
          {cart?.length > 0 ? cart.length : "0"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
