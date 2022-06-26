import "./modal.css"

export default function ModalCentered(props) {
    return (
        <div className="modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-header">
                <div className="modal-title" id="contained-modal-title-vcenter">
                    Cart
                </div>
            </div>
            <div className="modal-body">
                <p>
                    You cart is empty.
                </p>
                {/* <button className="btn-checkout">Checkout</button> */}
            </div>
        </div>
    );
}