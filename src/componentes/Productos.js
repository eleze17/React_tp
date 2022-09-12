import {React} from "react";
import ItemListContainer from "./ItemListContainer";

export const  productos = [
    {id:'#1789' ,  stock:14, class:'img1' ,titulo:'Almohada_DBZ', precio:'$1500', picture:'../../Imagenes/almohadadbz.jpg'},
    {id:'#2310' ,  stock:3, class:'img2' ,titulo:'Cartas_DBZ', precio:'$800', picture:'../../Imagenes/cartasdbz.jfif' },
    {id:'#3110' ,  stock:12,  class:'img3' ,titulo:'Esferas_DBZ', precio:'$2500', picture:'../../Imagenes/esferasdbz.webp' },
    {id:'#1206' ,  stock:1, class:'img4' ,titulo:'Juguetes_DBZ', precio:'$5000', picture:'../../Imagenes/juguetezdbz.jfif' },
    {id:'#1801' ,  stock:7, class:'img5' ,titulo:'Llavero_DBZ', precio:'$500', picture:'../../Imagenes/llaverodbz.jpg' },
    {id:'#1307' ,  stock:4, class:'img6' ,titulo:'Mochila_DBZ', precio:'$4000', picture:'../../Imagenes/mochiladbz.webp' },
    {id:'#2810' ,  stock:1, class:'img7' ,titulo:'Monopoly_DBZ', precio:'$1500', picture:'../../Imagenes/monopolydbz.png' },
    {id:'#1989' ,  stock:5, class:'img8' ,titulo:'Juego de play_DBZ', precio:'$10000', picture:'../../Imagenes/playdbz.jfif' },
    {id:'#1990' ,  stock:8, class:'img9' ,titulo:'Vaso_DBZ', precio:'$800', picture:'../../Imagenes/vasodbz.jpg' },
  ]
const Producto_detalle = ()=>{
return(
  <>
  <h4 className="text-danger " >PRODUCTOS</h4>
  <ItemListContainer />
  
  </>
  )}
  export default Producto_detalle;


