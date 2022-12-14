import {React,useState,useContext} from "react";
import {Cartcontext } from '../context/Cartcontext';
import {Link} from  "react-router-dom"
import Swal from 'sweetalert2'
import {Compra} from "../firebase";

    const Cart = () => {
    const carro =  useContext(Cartcontext);
    const {carrito} =  useContext(Cartcontext);
    const[carritaux,setCarritaux] = useState([{}]) 
    const [cont, setCont] = useState(0)

    function finalizarCompra(usuario,prods ) {
        Compra(usuario,prods)
        carro.vaciarCarrito()
        console.log(carro)
    }   

    let usuario = {
        nombre:'Eze',
        telefono:1111111111,
        mail:'eze@mail.com' }

    function quitarProd(p){
        let quitarp = p.id
        carro.quitarProducto(quitarp)
            setCarritaux(carrito)
        console.log(carritaux)
        console.log(carrito)
     }
      
    function add(i) {
        if (i.cantidad < i.stock) {
            i.cantidad= i.cantidad + 1
        } else {
           
            Swal.fire({
                title: 'Alcanzaste el limite de este producto',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
        carro.agregarProducto(i)
        setCont(i.cantidad)
    
    }
    function substract(i) {
        if (i.cantidad > 1) {
            i.cantidad= i.cantidad - 1
        } else {
            
        } 
        carro.agregarProducto(i)
        setCont(i.cantidad)
       }
   
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
                    {console.log(item)}
            <button className='btn btn-outline-primary text-center' onClick={()=>add(item)}>
                + 
            </button>
           </div>
          <div className="col">{item.titulo} </div>
          <div className="col">
            <button className='btn btn-outline-success text-center' onClick={()=>substract(item)}>
                -
            </button>
            </div>
            <div className="col text-center"> {item.precio}</div>
            <div className="col text-center"> {item.cantidad}</div>
           
            <div className="col text-center"> {item.cantidad * item.precio}</div>

          <div className="col text-center">
          <button className='btn btn-outline-success text-center' onClick={()=>quitarProd(item)}>
                    X
            </button>
            </div>  
            
        </div>
        
       ))}
       <Link to = "/categoria">      
       <button className="btn btn-outline-secondary">{(carrito.length)===0? "No tenes productos en el carro ":"Seguir comprando" }</button>
       </Link>
       
       {(carrito.length)!==0? <button className="btn btn-outline-secondary"onClick={()=>finalizarCompra(usuario,carrito)}>Finalizar compra</button>:"" }

       </div>
        );
}
export default Cart;