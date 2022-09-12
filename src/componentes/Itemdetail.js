import {React} from "react";

const Itemdetail = ({item}) => {

   console.log(item)
return (
        
  <>  
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{item.titulo}</h5>
    </div>
    <picture>
                <img src={item.picture} className='img-fluid rounded mx-auto d-block' alt='' />
    </picture>
    <div className="card-body">
      <p className="card-text">
       Aprovecha esta oportunidad, hay stock de {item.stock} productos
      </p>
    </div>
    </div>
  </>    )
}
export default Itemdetail
