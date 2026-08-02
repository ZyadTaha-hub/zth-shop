import { useEffect, useState } from "react";
import api from "../../services/api";
import Loading from "../../components/Loading/Loading";
import "./Categories.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategories() {
    try {
      const response = await api.get("/products/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">

      <h2 className="text-center mb-5">
        Categories
      </h2>

      <div className="row">

        {categories.map((category, index) => (

          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4"
            key={index}
          >

            <div className="card text-center shadow-sm h-100">

              <div className="card-body">

                <h5 className="text-capitalize">
                  {category}
                </h5>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}