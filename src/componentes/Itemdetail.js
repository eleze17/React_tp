import {React,useState,useContext} from "react";
import { Cartcontext } from '../context/Cartcontext';


const Itemdetail = ({item}) => {
const [cont, setCont] = useState(1)
const {carrito,agregarProducto,quitarProducto,vaciarCarrito} =  useContext(Cartcontext);

const alCarrito = (producto, cantidad) => {
  const productoCarrito = {id: producto.id, cantidad: cantidad}
  agregarProducto(productoCarrito)
  carrito.forEach(element => { alert(`Tenes el producto ${element.id} con  ${element.cantidad} unidades en el carrito`)})
}

function quitarProd(p){
  let quitarp = p.id
  quitarProducto(quitarp)
  carrito.forEach(element => { alert(`Tenes el producto ${element.id} con  ${element.cantidad} unidades en el carrito`)})
}

function vaciarCarr(){
  vaciarCarrito();
  if (carrito.length==0){  
    alert('No hay productos en el carrito') }
}

  function add() {
    if (cont < item.stock) {
        setCont(cont + 1)
    } else {
        cont = cont
    }
}
function substract() {
    if (cont > 1) {
        setCont( cont - 1)
    } else {
        cont = cont
    }
}

return (
        
  <>  
    <div className="card" style={{Width: '100%',height: '90vh',}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.picture} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.detalle}</p>
              <div className='botonera'>
            <p id="cantitem">Estas llevando: {cont}</p>
            <p>Stock: {item.stock}</p>
            <button className='btn btn-outline-primary' onClick={add}>
                Sumar
            </button>
            <button className='btn btn-outline-secondary' onClick={substract}>
                Restar
            </button>
            </div>
            <div>
            <button className="btn btn-outline-warning" onClick={()=> quitarProd (item)}> Quitar este producto del carrito </button>
            <button className="btn btn-outline-danger" onClick={()=> vaciarCarr ()}> Vaciar Carrito  </button>
            <button className="btn btn-primary" onClick={()=> alCarrito (item,cont)}> Comprar </button>
            </div>
              <img src="../../Imagenes/carrito.png" style={{maxWidth: '60px'}}/>
            </div>
          </div>
        </div>
      </div>
               
  </>    )
}
export default Itemdetail
