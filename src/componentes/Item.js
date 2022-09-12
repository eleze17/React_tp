import React from 'react'
import ItemCount from './ItemCount'
<<<<<<< HEAD
import {Link} from "react-router-dom";

const Item = ({ producto}) => {
=======

const Item = ({ producto, setSelected }) => {
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
    return (
        <div className={`card mb-3  ${producto.class} `}>
            <h3 className='card-header'> {producto.id}</h3>
            <h5 className='card-title'>{producto.titulo}</h5>
            <h6 className='card-subtitle text-muted'>{producto.precio}</h6>
            <picture>
                <img src={producto.picture} className='img-fluid rounded mx-auto d-block' alt='' />
            </picture>

            <div className='card-body'>
<<<<<<< HEAD
                <ItemCount producto={producto} stock={producto.stock} />
                <Link to = {`/detalles/${producto.id}` }>
                <button className='btn btn-primary' type='button'>
                Detalle
                </button>
                </Link> 
            
=======
                <ItemCount producto={producto} stock={producto.stock} setSelected={setSelected} />
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
            </div>
        </div>
    )
}
export default Item
