
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>*
          <Route path='/Nosotros' element={<Nosotros />}></Route>*
          <Route path='/Galeria' element={<Galeria />}></Route>*
          <Route path='/Contacto' element={<Contacto />}></Route>*
          <Route path='/Servicios' element={<Servicios />}></Route>*

        </Routes>

      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
