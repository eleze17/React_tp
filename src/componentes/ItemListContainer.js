import {React,useState,useEffect} from "react";
import ItemList from "./ItemList";
import {productos} from "./Productos";

export function verproduct (confirmacion){
  return new Promise  ((resolve,reject) => {
          if (confirmacion){
        resolve(productos)
      }
      else{
        reject("Error")
      }
})
}

const ItemListContainer =  () =>{

  const [ prod , setProd] = useState([]);

  useEffect( () =>{ 
      verproduct(true)
      .then(producto => {
        setProd(producto)
        
        
      })
        .catch(error=> {
          console.log(error)
                }) 
              },[])
    
  return( 
    <div className="egrid">
         <ItemList array ={prod} />
    </div>
)}
export default ItemListContainer;
