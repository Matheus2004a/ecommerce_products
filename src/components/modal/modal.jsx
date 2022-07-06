import { useState, useEffect } from "react";
import cartProducts from "../../services/cart";
import "./modal.css"
import Button from "../button/button";

const Modal = () => {
    const [statusCart, setStatusCart] = useState(false)
    const detailsProd = cartProducts.listItems
    let totalPrice = 0

    useEffect(() => {
        detailsProd.length > 0 ? setStatusCart(true) : setStatusCart(false)
    }, [])

    function deleteProd() {
        detailsProd.length = 0
        setStatusCart(false)
    }

    return (
        <div className="modal">
            <header className="modal-header">Cart</header>
            <div className="modal-body">
                {!statusCart && <p> You cart is empty.</p>}

                {statusCart && detailsProd.map((item, index) => {
                    totalPrice = item.price * item.qtd

                    return (
                        <div className="details-product" key={index}>
                            <figure>
                                <img src={item.img} alt={item.img} />
                                <figcaption>
                                    {item.name}
                                    <p>${item.price.toFixed(2)} x {item.qtd} <b>${totalPrice.toFixed(2)}</b></p>
                                </figcaption>
                            </figure>

                            <Button event={deleteProd} />
                        </div>
                    )
                }
                )}
                {statusCart && <button className="btn-checkout">Checkout</button>}
            </div>
        </div>
    );
}

export default Modal