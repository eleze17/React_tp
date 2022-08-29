import React from "react";
import  ItemCount from "./ItemCount";


const ItemListContainer =  ({mensaje})=> {

  function onAdd(){

  }

  return(
        <div className="container-fluid">
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
);
}
export default ItemListContainer;