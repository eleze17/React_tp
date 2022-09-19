import {React,useState,useContext, useEffect} from "react";
import { Cartcontext } from '../context/Cartcontext';
import {Link} from "react-router-dom";

const CartWidget = () => {
    const carro =  useContext(Cartcontext);
 
return(
    <picture className="pict">
        <img className="logo" src="..\Imagenes\icono.png">
        </img>
        <Link to="/cart">
        <img src="../../Imagenes/carrito.png" style={{maxWidth: '60px'}}>
        </img>
        </Link>      
        
        <span className="span_cant">{carro.calcItem()}</span>
    </picture>  );
}
export default CartWidget;