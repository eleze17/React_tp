import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="../public/index.html">
      Tienda
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Inicio
            <span className="visually-hidden">(current)</span>
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
</nav>

    </div>
  );
}

export default App;
