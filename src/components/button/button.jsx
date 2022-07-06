import iconDelete from "../../icons/icon-delete.svg"

const Button = (props) => {
    return (
        <button onClick={props.event}>
            <img src={iconDelete} alt="icon-delete" className="icon-delete" />
        </button>
    )
}

export default Button