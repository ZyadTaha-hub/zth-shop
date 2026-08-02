import { Link } from "react-router-dom";

export default function NotFound() {
  return (

    <div className="text-center mt-5">

      <h1>404</h1>

      <h3>Page Not Found</h3>

      <Link
        className="btn btn-dark mt-3"
        to="/"
      >
        Back Home
      </Link>

    </div>

  );
}