import { React, useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const ItemCount = ({ producto, stock }) => {
    const [cont, setCont] = useState(0)

    function add() {
        if (cont < stock) {
            setCont(cont + 1)
        } else {
            cont = cont
        }
    }
    function substract() {
        if (cont > 0) {
            setCont(cont - 1)
        } else {
            cont = cont
        }
    }

    return (
        <div>
            <p>Contador: {cont}</p>
            <p>Stock: {stock}</p>
            <button className='btn btn-outline-primary' onClick={add}>
                Sumar
            </button>
            <button className='btn btn-outline-secondary' onClick={substract}>
                Restar
            </button>
           
        </div>
    )
}

export default ItemCount
