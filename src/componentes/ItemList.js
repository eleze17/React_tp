import React, { useState } from 'react'
import Item from './Item'
import Itemdetail from './Itemdetail'

const ItemList = ({ array }) => {
    const [selected, setSelected] = useState()

    return (
        <>
            {array.map((producto) => (
                <Item key={producto.id} producto={producto} setSelected={setSelected} />
            ))}
            {selected && <Itemdetail selected={selected} setSelected={setSelected} />}
        </>
    )
}

export default ItemList
