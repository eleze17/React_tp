import Itemdetail from "./Itemdetail";
import {React} from "react";
import { useParams } from "react-router-dom";
import { productos } from "./Productos";

const ItemDetailContainer = () => {
   const parametro = useParams();
    console.log(parametro.id);

    const prod = productos.find(p=>p.id == parametro.id)
    console.log(prod);

   return (
   
   <Itemdetail item={prod} />
   
   

   )}
export default ItemDetailContainer
