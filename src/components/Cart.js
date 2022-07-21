import { useContext } from "react"
import CartContext from "../contexts/cartContext"

export default function Cart() {
    const {list, setList} = useContext(CartContext);
    return (
        <div>
            {
                list.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>Product Name: {item.title}</h4>
                            <span>ID: {item.id}</span>
                            <br />
                            <span>Quantity: {item.quantity}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}