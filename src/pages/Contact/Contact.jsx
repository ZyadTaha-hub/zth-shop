export default function Contact() {
  return (
    <div className="container">

      <h2 className="text-center mb-4">
        Contact Us
      </h2>

      <form>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            rows="5"
            className="form-control"
          ></textarea>
        </div>

        <button className="btn btn-primary">
          Send
        </button>

      </form>

    </div>
  );
}