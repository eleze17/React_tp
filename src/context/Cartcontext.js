import React, {createContext, useState} from 'react';

const Cartcontext = createContext()

const CarritoProveedor = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        let existe = carrito.findIndex(prod => prod.id ==producto.id)
        if  (existe == -1) {
        const carritoAux = carrito
        carritoAux.push(producto)
        setCarrito(carritoAux)
        }else{
        const carritoAux = carrito
        carritoAux.splice(existe, 1,producto) 
        setCarrito(carritoAux)   
            }
}

    const quitarProducto = (pid) => {
        const carritoAux = carrito
        let indice = carritoAux.findIndex(prod => prod.id == pid)
        indice != -1? carritoAux.splice(indice, 1) : alert('No tenes el producto este en el carrito')
        setCarrito(carritoAux)
    }

    const vaciarCarrito = ()=>{
        carrito.splice(0, carrito.length)

    }
    return (
        <>
            <Cartcontext.Provider value={{carrito, agregarProducto, quitarProducto,vaciarCarrito}}>
                    {props.children}
            </Cartcontext.Provider>
        </>
    );
}

export { Cartcontext, CarritoProveedor};