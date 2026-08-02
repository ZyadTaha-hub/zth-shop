import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layouttemp";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="categories"
          element={<Categories />}
        />

        <Route
          path="about"
          element={<About />}
        />


        <Route
          path="contact"
          element={<Contact />}
        />
<Route
    path="cart"
    element={<Cart />}
/>
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;