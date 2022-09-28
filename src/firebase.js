import { initializeApp } from "firebase/app";
import { updateDoc,orderBy,query,collection,addDoc ,getDoc,getDocs,deleteDoc,setDoc,doc,getFirestore } from "firebase/firestore";
import {React,useState,useContext, useEffect} from "react";
import Swal from 'sweetalert2'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_Apikey,
  authDomain: "tiendadbz.firebaseapp.com",
  projectId: "tiendadbz",
  storageBucket: "tiendadbz.appspot.com",
  messagingSenderId: "754834420730",
  appId: "1:754834420730:web:b27ec957f5ed2d0a19ea43",
  measurementId: "G-QJXVBGE9GN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductos = async() =>{
 const prod = await getDocs(collection(db,'productos'))
 console.log(prod.docs)
return prod.docs
}

export const getProducto = async(id) => {
 let p
  const producto = await getDoc(doc(db,"productos",id))
 p =[producto.id,producto.data()] 
 return p

}


const creaOrden = async (orden)=>{
const newOrden = doc(collection(db, "ordenes"));
await setDoc(newOrden, orden);
return newOrden;
}



export const Compra =(comprador,productos) => {
  
  let dia = new Date();
  let fecha = dia.toLocaleString();
  let orden = {
    usuario:{
        nombre:comprador.nombre,
        telefono:comprador.telefono,
        email:comprador.mail },
    fecha:fecha, 
    items: productos.map( item=> ({
      id:item.id, 
      nombre:item.titulo,
      cantidad:item.cantidad,
      precio: item.precio * item.cantidad}  
    ))}
    creaOrden(orden)
    .then(result => Swal.fire({
        title: "Su compra se realizo con exito",
        text: `Su N° de ID es: ${result.id}`,
        icon: "success",
        button: "OK"
    }))
    .catch(err => console.log(err));

      productos.forEach(async (item) => {
      item.stock = item.stock - item.cantidad
      const itemRef = doc(db,"productos",item.id)
      console.log(itemRef)
      await updateDoc(itemRef,               
          item    
      )
  })
   
  
  }
  


 

    



export default (db,app);
