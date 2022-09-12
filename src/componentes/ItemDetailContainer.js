<<<<<<< HEAD
import Itemdetail from "./Itemdetail";
import {React} from "react";
import { useParams } from "react-router-dom";
import { productos } from "./Productos";

const ItemDetailContainer = () => {

    const info  = useParams()
    console.log(info)
    const item = productos.find((prod)=> prod.id == info.id) 
    console.log(item)
   return (
    
    <Itemdetail item = {item} />
    
=======
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
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
    )
}

export default ItemDetailContainer
