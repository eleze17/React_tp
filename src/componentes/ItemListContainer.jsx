import {React,useState,useEffect} from "react";
import Item from "./Item";


const productos = [
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

function verproduct(confirmacion){
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
        console.log(producto)
          const infoProdJsx = producto.map((proditem,indice)=>
          <Item producto = {proditem} key = {indice}  /> 
            )
        setProd(infoProdJsx )
        })
        .catch(error=> {
          console.log(error)
                }) 
              },[])
    
  return( 
    <div className="egrid">
    {prod}
    </div>
)}
export default ItemListContainer;

        /*<div className="container-fluid">
         <h1> {mensaje} </h1>
  <div className="Grid">
  <div className="img1">
    <picture>
      <img
        src="../../Imagenes/almohadadbz.jpg"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    
    </picture>
    <div className="precio">
      <label className="label1">$1500</label>
      <ItemCount stock={7} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img2">
    <picture>
      <img
        src="../../Imagenes/cartasdbz.jfif"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$800</label>
      <ItemCount stock={10} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img3">
    <picture>
      <img
        src="../../Imagenes/esferasdbz.webp"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$2500</label>
      <ItemCount stock={8} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img4">
    <picture>
      <img
        src="../../Imagenes/juguetezdbz.jfif"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$5000</label>
      <ItemCount stock={3} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img5">
    <picture>
      <img
        src="../../Imagenes/llaverodbz.jpg"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$500</label>
      <ItemCount stock={6} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img6">
    <picture>
      <img
        src="../../Imagenes/mochiladbz.webp"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$1800</label>
      <ItemCount stock={1} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img7">
    <picture>
      <img
        src="../../Imagenes/monopolydbz.png"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$1200</label>
      <ItemCount stock={5} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img8">
    <picture>
      <img
        src="../../Imagenes/playdbz.jfif"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$8000</label>
      <ItemCount stock={6} />
      <button className="boton2">
        {" "}
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
  <div className="img9">
    <picture>
      <img
        src="../../Imagenes/vasodbz.jpg"
        className="img-fluid rounded mx-auto d-block"
        alt=""
      />
    </picture>
    <div className="precio">
      <label className="label1">$2200</label>
      <ItemCount stock={5} />
      <button className="boton2">
     
        <a href="www.google.com"> Agregar al carro</a>
      </button>
    </div>
  </div>
</div>

        </div>    
);*/
