import React from "react";
import CartWidget  from "./CartWidget";
import {Link} from "react-router-dom";
function Nabvar  ()  {
return(
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className=" container-fluid navbar-brand" href="../public/index.html">
                Tienda
            </a>
            
            <div className="navbar-nav" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" > Inicio </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Nosotros" className="nav-link active" > Nosotros </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Contacto" className="nav-link active" >Contacto </Link>
                    </li>
                    <li className="nav-item  dropdown">
                    <a  className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Productos </a>
                        <div className="dropdown-menu">
                        <Link to="/categoria" className="dropdown-item" >Todos </Link>
                        <Link to="/categoria/juegosdemesa" className="dropdown-item">Juegos de mesa</Link>
                        <Link to="/categoria/gamer" className="dropdown-item">Gamer</Link>
                        <Link to="/categoria/paralacasa" className="dropdown-item">Para la casa</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    <CartWidget/>    
    </nav>


    

    );
}

export default Nabvar ;