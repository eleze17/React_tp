import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ producto, setSelected }) => {
    return (
        <div className={`card mb-3  ${producto.class} `}>
            <h3 className='card-header'> {producto.id}</h3>
            <h5 className='card-title'>{producto.titulo}</h5>
            <h6 className='card-subtitle text-muted'>{producto.precio}</h6>
            <picture>
                <img src={producto.picture} className='img-fluid rounded mx-auto d-block' alt='' />
            </picture>

            <div className='card-body'>
                <ItemCount producto={producto} stock={producto.stock} setSelected={setSelected} />
            </div>
        </div>
    )
}
export default Item
