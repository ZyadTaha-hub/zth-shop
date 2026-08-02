import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import "./Products.css";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    async function getProducts() {

        try {

            const response = await api.get("/products");

            setProducts(response.data);
            setFilteredProducts(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        getProducts();

    }, []);

    useEffect(() => {

        const result = products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredProducts(result);

    }, [search, products]);

    if (loading) {
        return <Loading />;
    }

    return (

        <div className="container">

            <h2 className="text-center mb-4">
                Our Products
            </h2>

            <div className="mb-4">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="row">

                {
                    filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))

                    ) : (

                        <h4 className="text-center">
                            No Products Found
                        </h4>

                    )
                }

            </div>

        </div>

    );

}