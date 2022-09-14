import {React} from "react";
import ItemCount from "./ItemCount";
const Itemdetail = ({item}) => {

   console.log(item)
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
              <ItemCount producto={item} stock={item.stock} />
              <button className="btn btn-primary"> Agregar al carrito </button>
              <img src="../../Imagenes/carrito.png" style={{maxWidth: '60px'}}/>
            </div>
          </div>
        </div>
      </div>
               
  </>    )
}
export default Itemdetail
