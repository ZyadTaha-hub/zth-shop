import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const response = await api.get("/products");

      setProducts(response.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="hero text-center">

        <h1>Welcome To ZTH Shop</h1>

        <p>Simple React E-Commerce Website</p>

        <Link to="/products" className="btn btn-primary mt-3">
          Browse Products
        </Link>

      </section>

      <section className="mt-5">

        <h2 className="text-center mb-4">
          Featured Products
        </h2>

        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>
    </>
  );
}