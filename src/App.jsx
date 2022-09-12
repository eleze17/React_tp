import './App.css';
import Nabvar from  "./componentes/Nabvar";
<<<<<<< HEAD
import Inicio from './componentes/Inicio'
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import Producto_detalle from './componentes/Productos'
import {BrowserRouter, Routes , Route} from "react-router-dom"
=======
import ItemListContainer from './componentes/ItemListContainer';
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <BrowserRouter>
    <Nabvar />
    <Routes>
      <Route path='/' element ={<Inicio />} > </Route>
      <Route path='/Nosotros' element ={<Nosotros />} > </Route>
      <Route path='/Contacto' element ={<Contacto />} > </Route>
      <Route path='/productos' element ={<Producto_detalle />} > </Route>
      <Route path='/detalles/:id' element ={<ItemDetailContainer />} > </Route>
      </Routes>
    </BrowserRouter>
    </div>
=======
    <Nabvar />
    <ItemListContainer />
    
     
</div>
>>>>>>> 8f42db1bd407ea3e89414cddb45d495147d763b1
    );
}

export default App;
