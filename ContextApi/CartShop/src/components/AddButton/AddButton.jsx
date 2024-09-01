import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function AddButton ({ name }) {

    const { addCart } = useContext(CartContext);

    return (
        <button onClick={() => addCart(name)}>Adicionar ao carrinho</button>
    )
}