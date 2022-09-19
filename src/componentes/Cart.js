import {React,useState,useContext, useEffect} from "react";
import { Cartcontext } from '../context/Cartcontext';

const Cart = () => {
    const {carrito,agregarProducto,quitarProducto,vaciarCarrito} =  useContext(Cartcontext);
    const[carritaux,setCarritaux] = useState([]) 
    const [cont, setCont] = useState(0)
    
    
    function quitarProd(p){
        let quitarp = p.id
        quitarProducto(quitarp)
        carrito.forEach(element => { alert(`Tenes el producto ${element.id} con  ${element.cantidad} unidades en el carrito`)})
        setCarritaux(carrito)
       
    }
    
      function vaciarCarr(){
        vaciarCarrito();
        if (carrito.length==0){  
          alert('No hay productos en el carrito') }
      }
      function add(i) {
        if (i.cantidad < i.stock) {
            i.cantidad= i.cantidad + 1
        } else {
            i.cantidad= i.cantidad 
        }
        agregarProducto(i)
        setCont(i.cantidad)
    }
    function substract(i) {
        if (i.cantidad > 0) {
            i.cantidad= i.cantidad - 1
        } else {
            i.cantidad= i.cantidad 
        } 
        agregarProducto(i)
        setCont(i.cantidad)
    }
    
    function alCarrito  (producto, cantidad)  {
        const productoCarrito = {id: producto.id, cantidad: cantidad}
        agregarProducto(productoCarrito)
        carrito.forEach(element => { alert(`Tenes el producto ${element.id} con  ${element.cantidad} unidades en el carrito`)})}
    
    
    
   
    return(
      
        <div className="text-center row row-cols-7">
             <div className="col text-center">Mas</div>
             <div className="col text-center">Detalle</div>
             <div className="col text-center">Menos</div>
             <div className="col text-center">Precio</div>
             <div className="col text-center">Cantidad</div>
             <div className="col text-center">Total</div>
             <div className="col text-center">Eliminar</div>
        {carrito.map((item) => (
           
        <div className="text-center row row-cols-7 "key = {item.id}>
          <div className="col tex-center">
            <button className='btn btn-outline-primary text-center' onClick={()=>add(item)}>
                + 
            </button>
           </div>
          <div className="col">{item.detalle} </div>
          <div className="col">
            <button className='btn btn-outline-success text-center' onClick={()=>substract(item)}>
                -
            </button>
            </div>
            <div className="col text-center"> {item.precio}</div>
            <div className="col text-center"> {item.cantidad}</div>
           
            <div className="col text-center"> {item.cantidad * parseInt(item.precio.substring(1,item.precio.length ))}</div>

          <div className="col text-center">
          <button className='btn btn-outline-success text-center' onClick={()=>quitarProd(item)}>
                    X
            </button>
            </div>
        </div>
        ))}
       </div>
        );
}
export default Cart;