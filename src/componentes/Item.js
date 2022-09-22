import React from 'react'
import {Link} from "react-router-dom";

const Item = ({ producto}) => {
console.log(producto)

    return (
        <div className={`card mb-3  ${producto[1].class} `}>
            <h3 className='card-header'> {producto[0]}</h3>
            <h5 className='card-title'>{producto[1].titulo}</h5>
            <h6 className='card-subtitle text-muted'>{producto[1].precio}</h6>
            <picture>
                <img src={producto[1].picture} className='img-fluid rounded mx-auto d-block' alt='' />
            </picture>

            <div className='card-body'>
                <Link to = {`/categoria/${producto[1].categoria}/detalles/${producto[0]}`}>
                <button className='btn btn-primary' type='button'>
                Detalle
                </button>
                </Link>     
            </div>
        </div>
    )
}
export default Item
