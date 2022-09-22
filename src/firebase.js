import { initializeApp } from "firebase/app";
import { where,orderBy,query,collection,addDoc ,getDoc,getDocs,deleteDoc,updateDoc,doc,getFirestore } from "firebase/firestore";


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

export default (db,app);
