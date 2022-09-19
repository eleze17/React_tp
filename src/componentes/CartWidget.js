import {React,useState,useContext, useEffect} from "react";
import { Cartcontext } from '../context/Cartcontext';


const CartWidget = () => {
    const carro =  useContext(Cartcontext);
 
return(
    <picture className="pict">
        <img className="logo" src="..\Imagenes\icono.png">
        
        </img>
        <span className="span_cant">{carro.calcItem()}</span>
    </picture>  );
}
export default CartWidget;