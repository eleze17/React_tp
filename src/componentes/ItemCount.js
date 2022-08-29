import {React, useState} from 'react';


const  ItemCount = ({stock})=> {
const [cont, setCont ] = useState(1);
 
function add(){
     if (cont < stock){
       setCont(cont + 1);
     }else{ 
      cont = cont;
      }
    }
function substract(){
      if (cont > 1){
        setCont(cont - 1);
      }else{ 
       cont = cont;
       }
     }



    return (
        <div>
        <p>
          Contador: {cont}
        </p>
        <p>
          Stock: {stock}
        </p>
          <button className='btn btn-success' onClick={()=> add()}>
            Sumar 
          </button>
          <button className='btn btn-danger' onClick={() => substract()}>
            Restar
          </button>
        </div>
        );
    }
    
    export default  ItemCount;