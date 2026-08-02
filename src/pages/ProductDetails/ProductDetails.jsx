import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../components/Loading/Loading";
import "./ProductDetails.css";

export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProduct() {

        try {

            const response = await api.get(`/products/${id}`);

            setProduct(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        getProduct();

    }, [id]);

    if (loading) {

        return <Loading />;

    }

    return (

        <div className="container">

            <div className="row align-items-center">

                <div className="col-md-5">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid product-image"
                    />

                </div>

                <div className="col-md-7">

                    <h2>{product.title}</h2>

                    <h3 className="text-success mt-3">
                        ${product.price}
                    </h3>

                    <p className="text-muted">
                        {product.category}
                    </p>

                    <p>
                        {product.description}
                    </p>

                    <p>
                        ⭐ {product.rating.rate}
                        {" "}
                        ({product.rating.count} Reviews)
                    </p>

                    <Link
                        to="/products"
                        className="btn btn-dark"
                    >
                        Back To Products
                    </Link>

                </div>

            </div>

        </div>

    );

}