import './App.css';
import Nabvar from  "./componentes/Nabvar";
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
    <div className="App">

    <Nabvar />
    <ItemListContainer mensaje= "Bienvenido a la tienda!!" />

     
</div>
    );
}

export default App;
