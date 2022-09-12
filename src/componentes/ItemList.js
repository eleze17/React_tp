import React, { useState } from 'react'
import Item from './Item'
<<<<<<< HEAD


const ItemList = ({ array }) => {
  
    return (
        <>
            {array.map((producto) => (
                <Item key={producto.id} producto={producto}  />
            ))}
          
=======
import Itemdetail from './Itemdetail'

const ItemList = ({ array }) => {
    const [selected, setSelected] = useState()

    return (
        <>
            {array.map((producto) => (
                <Item key={producto.id} producto={producto} setSelected={setSelected} />
            ))}
            {selected && <Itemdetail selected={selected} setSelected={setSelected} />}
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
        </>
    )
}

export default ItemList
