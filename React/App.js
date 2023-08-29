import './App.css';
import About from './Components/About';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Components/Product';
import ProductApi from './Components/ProductApi';
import Crud from './Components/Crud';

function App() {
  return (
    <div className="App">
      {/* <h1>Heading 1</h1> */}
      
      {/* <Card title="card 1" desc="this is card 1"/>
      <Card title="card 2" desc="this is card 2"/>
      <Card title="card 3" desc="this is card 3"/>
      <Card title="card 4" desc="this is card 4"/>
      */}
      {/* <Home username="Mukund" /> */}
      {/* <BrowserRouter>
      <Navbar login="yes"/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/> */}

      <Product/>
      {/* <ProductApi/> */}
      <Crud/>
    </div>
  );
}

export default App;
