import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {

    const { addToCart } = useContext(CartContext);

    return (

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div className="card h-100 shadow-sm">

                <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.title}
                />

                <div className="card-body d-flex flex-column">

                    <h6>{product.title}</h6>

                    <h5 className="text-success">
                        ${product.price}
                    </h5>

                    <p className="text-muted">
                        {product.category}
                    </p>

                    <button
                        className="btn btn-success mb-2"
                        onClick={() => addToCart(product)}
                    >
                        Add To Cart
                    </button>

                    <Link
                        className="btn btn-primary"
                        to={`/products/${product.id}`}
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>

    );

}