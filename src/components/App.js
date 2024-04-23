import './App.css';
import DatosInternet from './DatosInternet';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';
import Television from './Television';
import Transporte from './Transporte';
import Buscador from './Buscador';
import Checklist from './Checklist';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/datos-internet" element={<DatosInternet />} />
        <Route path="/television" element={<Television />}>
        <Route path={`${path}/buscador`} element={<Buscador />} />
        <Route path={`${path}/checklist`} element={<Checklist />} />
        </Route>
        <Route path="/transporte" element={<Transporte />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
