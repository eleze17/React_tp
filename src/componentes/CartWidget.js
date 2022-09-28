import {React,useContext} from "react";
import { Cartcontext } from '../context/Cartcontext';
import {Link} from "react-router-dom";

const CartWidget = () => {
    const carro =  useContext(Cartcontext);
 
return(
    <picture className="pict">
        <img className="logo" alt ="logo"src="https://firebasestorage.googleapis.com/v0/b/tiendadbz.appspot.com/o/icono.png?alt=media&token=6ac3bd80-03ff-4725-be95-6cbac6a1179e">
        </img>
        
        {carro.calcItem()!==0?
        <Link to="/cart">
        <img alt="carrito"src="https://firebasestorage.googleapis.com/v0/b/tiendadbz.appspot.com/o/carrito.png?alt=media&token=3df48044-79b1-4b8d-aacd-7a2609663c15" style={{maxWidth: '60px'}}>
        </img>
        <span className="span_cant">{carro.calcItem()}</span>   
        </Link>:"" }
 
        
    </picture>  );
}
export default CartWidget;