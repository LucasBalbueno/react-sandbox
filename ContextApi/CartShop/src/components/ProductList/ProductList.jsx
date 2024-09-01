import { AddButton } from "../AddButton/AddButton";

export function ProductList () {
    return (
        <>
            <h2>Prateleira:</h2>
            <ul>
                <li>
                    <h3>Banana Prata</h3>
                    <AddButton name={'Banana Prata'}/>
                </li>

                <li>
                    <h3>Maça Vermelha</h3>
                    <AddButton name={'Maça Vermelha'}/>
                </li>

                <li>
                    <h3>Mamão Papaya</h3>
                    <AddButton name={'Mamão Papaya'}/>
                </li>

                <li>
                    <h3>Abacate</h3>
                    <AddButton name={'Abacate'}/>
                </li>

                <li>
                    <h3>Melancia</h3>
                    <AddButton name={'Melancia'}/>
                </li>

                <li>
                    <h3>Uva</h3>
                    <AddButton name={'Uva'}/>
                </li>
            </ul>
        </>
    )
}