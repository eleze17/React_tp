import {React,useState,useEffect} from "react";
import ItemList from "./ItemList";
<<<<<<< HEAD
import {productos} from "./Productos";
=======
import productos from "./Productos";
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1

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
<<<<<<< HEAD
        setProd(producto)
        
        
      })
=======
        setProd(producto )
        })
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
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
