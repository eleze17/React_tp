import { React, useState, useEffect } from 'react'
import { verproduct } from './ItemListContainer'
import Itemdetail from './Itemdetail'

const ItemDetailContainer = ({ producto, setSelected }) => {
    function getItem(img) {
        setSelected(img)
    }

    return (
        <>
            <button className='btn btn-primary' type='button' onClick={() => getItem(producto)}>
                Detalles
            </button>
        </>
    )
}

export default ItemDetailContainer
