import {React,useState,useEffect} from "react";
import ItemList from "./ItemList";
import {productos} from "./Productos";
import { useParams } from "react-router-dom";


export function verproduct (confirmacion,categoria){

  return new Promise  ((resolve,reject) => {
          if (confirmacion && categoria != undefined ){
        resolve(productos.filter(p => p.categoria === categoria))
      }
      else if (confirmacion && categoria === undefined) {
        resolve(productos)       
      }
      else{
        reject("Error")
      }
})
}

const ItemListContainer =  () =>{
  const { idCategory } = useParams(); 
  const [ prod , setProd] = useState([]);
  console.log(idCategory)
 

  useEffect( () =>{ 
      verproduct(true,idCategory)
      .then(producto => {
       setProd(producto)
      
        
      })
       
        .catch(error=> {
          console.log(error)
                }) 
              },[idCategory])
    
  return( 
    <div className="egrid">
         <ItemList array ={prod} />
    </div>
)}
export default ItemListContainer;
