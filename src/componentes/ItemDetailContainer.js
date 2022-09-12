import Itemdetail from "./Itemdetail";
import {React} from "react";
import { useParams } from "react-router-dom";
import { productos } from "./Productos";

const ItemDetailContainer = () => {

    const info  = useParams()
    console.log(info)
    const item = productos.find((prod)=> prod.id == info.id) 
    console.log(item)
   return (
    
    <Itemdetail item = {item} />
    

   )}
export default ItemDetailContainer
