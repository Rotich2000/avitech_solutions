import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Footer, Navbar} from './components'
import Contact from './container/contact/Contact';
import Home from './container/home/Home';
import Products from './container/products/Products';
import Services from './container/services/Services';
import About from './container/about/About'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" exact element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
