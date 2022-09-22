import {React,useState,useContext} from "react";
import { Cartcontext } from '../context/Cartcontext';
import {Link} from  "react-router-dom"

const Itemdetail = ({item}) => {
  console.log(item)
const [cont, setCont] = useState(0)
const {carrito,agregarProducto,quitarProducto,vaciarCarrito} =  useContext(Cartcontext);

  const alCarrito = (producto, cantidad) => {
  const productoCarrito = {id: producto[0], cantidad: cantidad,titulo:producto[1].titulo,stock:producto[1].stock,precio:producto[1].precio}
  agregarProducto(productoCarrito)
  }

  function quitarProd(p){
  quitarProducto(p)
  carrito.forEach(element => { alert(`Tenes el producto ${element.id} con  ${element.cantidad} unidades en el carrito`)})
}

function vaciarCarr(){
  vaciarCarrito();
  if (carrito.length==0){  
    alert('No hay productos en el carrito') }
}

  function add() {
    if (cont < item[1].stock) {
        setCont(cont + 1)
    } else {
        cont = cont
    }
}
function substract() {
    if (cont > 0) {
        setCont( cont - 1)
    } else {
        cont = cont
    }
}

return (
        
  <>  
    <div className="card" style={{Width: '100%',height: '90vh'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item[1].picture} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item[1].titulo}</h5>
              <p className="card-text">{item[1].detalle}</p>
              <div className='botonera'>
            <p id="cantitem">Estas llevando: {cont}</p>
            <p>Stock: {item[1].stock}</p>
          
            <button className='btn btn-outline-primary' onClick={add}>
                +
            </button>
            <button className='btn btn-outline-secondary' onClick={substract}>
                -
            </button>
            </div>
            <div>
            <button className="btn btn-outline-warning" onClick={()=> quitarProd[0] (item)}> Quitar este producto del carrito </button>
            <button className="btn btn-outline-danger" onClick={()=> vaciarCarr ()}> Vaciar Carrito  </button>
            
           { cont > 0 ?  <button className="btn btn-primary" onClick={()=> alCarrito (item,cont)}> Comprar </button>:'' }
            </div>
            <Link to = "/cart">
              <img src="https://firebasestorage.googleapis.com/v0/b/tiendadbz.appspot.com/o/carrito.png?alt=media&token=3df48044-79b1-4b8d-aacd-7a2609663c15" style={{maxWidth: '60px'}}/>
              Ir al carrito
            </Link>
            </div>
          </div>
        </div>
      </div>
               
  </>    )
}
export  default Itemdetail
