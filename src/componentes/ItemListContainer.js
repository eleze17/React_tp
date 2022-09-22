import {React,useState,useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getProductos} from "../firebase";


const ItemListContainer =  () =>{
  const { idCategory } = useParams(); 
  const [ prod , setProd] = useState([]);
  
  async function consultarDB () {
    const productos = await getProductos()
    const items =  productos.map(producto =>  [producto.id,producto.data()])
      let i 
    if (idCategory == '' || idCategory === undefined){
    i = items 
    }else{
      i = items.filter(f => f[1].categoria == idCategory)
      
    }
return i 
   
  }


  useEffect( () =>{ 
   
    consultarDB()
    .then(result => setProd(result))
    .catch(err => console.log(err));
}, [idCategory]);  
   
  
       
      
    
  return( 
    <div className="egrid">
         <ItemList array ={prod} />
    </div>
)}
export default ItemListContainer;