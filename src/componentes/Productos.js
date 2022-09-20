import {React} from "react";
import ItemListContainer from "./ItemListContainer";

export const  productos = [
    {id:'1789' ,  stock:14, class:'img1' ,titulo:'Almohada_DBZ', precio:'$1500', picture:'../../../Imagenes/almohadadbz.jpg',categoria:'paralacasa',
  detalle:'Almohada de pluma Dragon ball, para un descanso superpoderoso, medidas 80cm de largo y 20 de ancho , tenemos de distintos personajes.'},
    {id:'2310' ,  stock:3, class:'img2' ,titulo:'Cartas_DBZ', precio:'$800', picture:'../../../Imagenes/cartasdbz.jfif',categoria:'juegosdemesa',
    detalle:'Cartas para disfrutar con la familia o amigos, sirven para jugar al trucho, chinchon,escoba y mas' },
    {id:'3110' ,  stock:12,  class:'img3' ,titulo:'Esferas_DBZ', precio:'$2500', picture:'../../../Imagenes/esferasdbz.webp',categoria:'paralacasa',
    detalle:'Esferas decorativas para tu casa, dale un toque diferente a tu hogas con estas 7 esferas' },
    {id:'1206' ,  stock:1, class:'img4' ,titulo:'Juguetes_DBZ', precio:'$5000', picture:'../../../Imagenes/juguetezdbz.jfif' ,categoria:'paralacasa',
    detalle:'Juguetes articulables para los mas chicos, excelente calidad'},
    {id:'1801' ,  stock:7, class:'img5' ,titulo:'Llavero_DBZ', precio:'$500', picture:'../../../Imagenes/llaverodbz.jpg',categoria:'paralacasa',
    detalle:'Detalle para regalar o regalarse y quedar mas que bien con este hermoso llavero de Dragon Ball' },
    {id:'1307' ,  stock:4, class:'img6' ,titulo:'Mochila_DBZ', precio:'$4000', picture:'../../../Imagenes/mochiladbz.webp',categoria:'paralacasa',
    detalle:'Mochila reforzada para el cole,gran capacidad y comodidad para llevar al cole' },
    {id:'2810' ,  stock:1, class:'img7' ,titulo:'Monopoly_DBZ', precio:'$1500', picture:'../../../Imagenes/monopolydbz.png' ,categoria:'juegosdemesa',
    detalle:'Juego de mesa, el tradicional monopoly reversionado a Dragon Ball, diversion garantizada'},
    {id:'1989' ,  stock:5, class:'img8' ,titulo:'Juego de play_DBZ', precio:'$10000', picture:'../../../Imagenes/playdbz.jfif' ,categoria:'gamer',
    detalle:'Juego de play station 4, se puede jugar hasta 4 usuarios, revivi las batallas epicas de la saga de Dragon ball'},
    {id:'1990' ,  stock:8, class:'img9' ,titulo:'Vaso_DBZ', precio:'$800', picture:'../../../Imagenes/vasodbz.jpg',categoria:'paralacasa',
    detalle:'Excelente vaso para la casa, de vidrio 400 cm3 de capacidad.' },
  ]
const Producto_detalle = ()=>{
return(
  
 
  <ItemListContainer />
  
  )}
  export default Producto_detalle;


