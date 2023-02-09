import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
//import Swal from 'sweetalert2'
import ItemContainer from './components/ItemContainer'
import Footer from './components/Footer'
import { ECarousel } from './components/ECarousel';


function App() {


  return (
    //Swal.fire('Welcome to my E-Commerce'),
    <>      
      <NavBar/>
      <ECarousel/>
      <ItemContainer/>
      <Footer/>
    </> 
  );
}

export default App;
