import React, { useState } from 'react'
import Item from './Item'


const ItemList = ({ array }) => {
  
    return (
        <>
            {array.map((producto) => (
                <Item key={producto.id} producto={producto}  />
            ))}
          
        </>
    )
}

export default ItemList
