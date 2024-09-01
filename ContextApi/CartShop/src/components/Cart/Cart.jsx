import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
    const { CartList } = useContext(CartContext);
    const [list, setList] = useState([]);

    const criarList = () => {
        return list.map((item, index) => {
            return <li key={index}>{item}</li>;
        });
    };

    const atualizar = () => {
        setList(CartList);
    };

    return (
        <>
            <h2>Carrinho de compras:</h2>
            <div className="cartContainer">
                <button onClick={atualizar}>Atualizar</button>
                <ul>
                    {criarList()}
                </ul>
            </div>
        </>
    );
}