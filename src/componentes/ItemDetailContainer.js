import Itemdetail from "./Itemdetail";
import {React,useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import getProducto from '../firebase'

const ItemDetailContainer = () => {
   const [ prod , setProd] = useState([]);
  
   const parametro = useParams();
   useEffect( () =>{ 
   
      getProducto(parametro)
      .then(result => setProd(result))
      .catch(err => console.log(err));
  }, [parametro]);  
   

    
   
   return (
   
   <Itemdetail item={prod} />
   
   

   )}
export default ItemDetailContainer
