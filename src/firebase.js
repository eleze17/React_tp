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

const getProducto = async(id) =>{
      const prod = await getDoc(doc(db,'productos',id))
      return prod
}

/*const getProductos = async () =>{
  const productos = await getDocs(collection(db,'productos'))
  return productos
}*/


 const firestoreFetch = async(cat) => {
  let category;
  if (cat != undefined  ) {
      category = query(collection(db, "productos"), where('categoria', '==', cat));
  } else {
     category = query(collection(db, "productos"), orderBy('titulo'));
  }
  const datos = await getDocs(category);
  const data = datos.docs.map(document => ({
      id: document.id,
      ...document.data()
  }));
  return data;
}

export default (db,app,getProducto,firestoreFetch);
