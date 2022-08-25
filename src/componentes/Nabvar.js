import React from "react";
import Logo  from "./Logo";
function Nabvar  ()  {
return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="../public/index.html">
                Tienda
            </a>
           
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Nosotros
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Contacto
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Productos
                        </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                        Juguetes
                        </a>
                        <a className="dropdown-item" href="#">
                            Juegos de mesa
                        </a>
                        <a className="dropdown-item" href="#">
                            Para la casa
                        </a>
                        <a className="dropdown-item" href="#">
                            Gaming
                        </a>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    <Logo/>    
    </nav>
    

    );
}

export default Nabvar ;