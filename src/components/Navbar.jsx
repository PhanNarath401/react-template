import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import shop_icon from "../assets/image/logo.png"; // Adjust path based on structure
import icon from "../assets/image/icon.png";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={icon} alt="icon" className="navbar-icon" /> SHOPPER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-logo" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop">
                  Shop
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/men">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/women">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/kids">
                  Kids
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login-signup">
                  Login/Signup
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              
            </form>
            <Link className="nav-link active" aria-current="page" to="/cart">
              <button className="btn btn-outline-success " type="submit">
                <img src={shop_icon} alt=" Logo" className="search-logo" />
              </button>
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
