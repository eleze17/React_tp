import React from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom";

const Item = ({ producto}) => {

    return (
        <div className={`card mb-3  ${producto.class} `}>
            <h3 className='card-header'> {producto.id}</h3>
            <h5 className='card-title'>{producto.titulo}</h5>
            <h6 className='card-subtitle text-muted'>{producto.precio}</h6>
            <picture>
                <img src={producto.picture} className='img-fluid rounded mx-auto d-block' alt='' />
            </picture>

            <div className='card-body'>
                <ItemCount producto={producto} stock={producto.stock} />
                <Link to = {`/detalles/${producto.id}` }>
                <button className='btn btn-primary' type='button'>
                Detalle
                </button>
                </Link>     
            </div>
        </div>
    )
}
export default Item
