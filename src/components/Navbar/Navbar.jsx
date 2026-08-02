import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

export default function Navbar() {

    const { cart } = useContext(CartContext);

    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    ZTH Shop
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories">
                                Categories
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/cart"
                            >
                                🛒 {cart.length}
                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}