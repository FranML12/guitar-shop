import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Swal from 'sweetalert2'
import ItemContainer from './components/ItemContainer'
import Item from './components/Item';

function App() {


  return (
    Swal.fire('Welcome to my E-Commerce'),
    <>      
      <NavBar/>
      <h1>Hi!</h1>
      <ItemContainer/>
      <Item/>
    </> 
  );
}

export default App;
