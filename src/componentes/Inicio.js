import {React,useEffect,useState} from "react";

const Inicio = ()=>{
const [guerrerosState,setGuerreros] = useState([])

useEffect(()=> {
  let guerrerosz = []
  const cargaPersonajes = async () => {
      const api  = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters?limit=50')
      let personajes = await  api.json()
      personajes = personajes[2]        
      console.log(personajes)
      personajes.forEach(element => {
      element.specie.includes("Saiyan") || element.specie.includes("Humano") ? guerrerosz.push(element) : console.log('nada') 
      setGuerreros(guerrerosz)    
    });
      
  }
 cargaPersonajes()
},[])
 
return(
  <>
   <h1>Inicio</h1>

    {guerrerosState.map((guerrero) => (
         <figure classname="figure-img img-fluid rounded" key = {guerrero.id} >
         <img classname="img-thumbnail" src = {guerrero.imageUrl} ></img>
         <p>{guerrero.name}</p>
         </figure>))}


     
    
  
  </>
  )

}


  export default Inicio;