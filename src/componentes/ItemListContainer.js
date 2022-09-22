import {React,useState,useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import firestoreFetch from "../firebase";


const ItemListContainer =  () =>{
  const { idCategory } = useParams(); 
  const [ prod , setProd] = useState([]);
  
 

  useEffect( () =>{ 
   
    firestoreFetch(idCategory)
    .then(result => setProd(result))
    .catch(err => console.log(err));
}, [idCategory]);  
   
  
       
      
    
  return( 
    <div className="egrid">
         <ItemList array ={prod} />
    </div>
)}
export default ItemListContainer;
