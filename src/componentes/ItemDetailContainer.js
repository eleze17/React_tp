import Itemdetail from "./Itemdetail";
import {React,useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {getProducto} from '../firebase'

const ItemDetailContainer = () => {
   const [prod , setProd] = useState([]);
   const parametro = useParams().id;
    
   async function mostrarProd(id){
   const p = await getProducto(id)
   let pdiv = <Itemdetail item={p} />
 
   return pdiv
  }
   useEffect( () =>{ 
      mostrarProd(parametro)
    .then(result => setProd(result))      
    .catch(err => console.log(err));
   
  }, [parametro]);  
  

  
  return (
<>{prod}</>
    
 
   

   )}
export default ItemDetailContainer
