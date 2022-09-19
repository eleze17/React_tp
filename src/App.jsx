import './App.css';
import Nabvar from  "./componentes/Nabvar";
import Inicio from './componentes/Inicio'
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import Producto_detalle from './componentes/Productos'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Cart from './componentes/Cart';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nabvar />
    <Routes>
      <Route path='/' element ={<Inicio />} > </Route>
      <Route path='/Nosotros' element ={<Nosotros />} > </Route>
      <Route path='/Contacto' element ={<Contacto />} > </Route>
      <Route path='/productos' element ={<Producto_detalle />} > </Route>
      <Route path='/detalles/:id' element ={<ItemDetailContainer />} > </Route>
      <Route path='/cart' element ={<Cart />} > </Route>
     
      </Routes>
    </BrowserRouter>
    </div>
    
    );
}

export default App;
