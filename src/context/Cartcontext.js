import React, {createContext, useState} from 'react';

const Cartcontext = createContext()

const CarritoProveedor = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        let existe = carrito.findIndex(prod => prod.id ===producto.id)
        if  (existe === -1) {
        const carritoAux = carrito.splice(0)
        carritoAux.push(producto)
        setCarrito(carritoAux)
        }else{
        const carritoAux = carrito.splice(0)
        carritoAux.splice(existe, 1,producto) 
        setCarrito(carritoAux) 
        calcItem()  
            }
}

    const quitarProducto = (pid) => {
        const carritoAux = carrito.splice(0)
        let indice = carritoAux.findIndex(prod => prod.id === pid)
        indice !== -1? carritoAux.splice(indice, 1) : alert('No tenes el producto este en el carrito')
        setCarrito(carritoAux)
        calcItem()
    }

    const vaciarCarrito = ()=>{
        setCarrito([]);

    }
   
    const calcItem = () =>{
        let c = 0
        carrito.forEach(item => c = (item.cantidad + c))
       
        return c
     }


    return (
        <>
            <Cartcontext.Provider value={{carrito, agregarProducto, quitarProducto,vaciarCarrito,calcItem}}>
                    {props.children}
            </Cartcontext.Provider>
        </>
    );
}

export { Cartcontext, CarritoProveedor};