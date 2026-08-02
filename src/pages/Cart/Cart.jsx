import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {

    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (

        <div className="container">

            <h2 className="mb-4">
                Shopping Cart
            </h2>

            {
                cart.length === 0 ? (

                    <h4>Your cart is empty.</h4>

                ) : (

                    <>
                        {
                            cart.map((item) => (

                                <div
                                    key={item.id}
                                    className="card mb-3 p-3"
                                >

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div>

                                            <h5>{item.title}</h5>

                                            <p>
                                                ${item.price}
                                            </p>

                                        </div>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))
                        }

                        <h3>
                            Total : ${total.toFixed(2)}
                        </h3>

                    </>

                )
            }

        </div>

    );

}