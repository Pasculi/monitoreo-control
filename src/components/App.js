import './App.css';
/* import DatosInternet from './DatosInternet'; */
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import Nav from './Nav';
import { Routes, Route, Navigate } from 'react-router-dom';
import Television from './Television';
import Transporte from './Transporte';
import Buscador from './Buscador';
import Checklist from './Checklist';
import NotFoundPage from './NotFoundPage';
import UserPage from './UserPage';
import UsersPage from './UsersPage';
import { Context, contextoUser } from './Context';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState('nombre');
  console.log({user})
  return (
    <div className="container">
      <Context.Provider value={contextoUser[user]}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/datos-internet" element={<Navigate to="https://www.google.cl/?hl=es" />} />
          <Route path="/television/*" element={<Television />}>
            <Route path={`buscador`} element={<Buscador />} />
            <Route path={`checklist`} element={<Checklist />} />
          </Route>
          <Route path="/transporte" element={<Transporte />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage id={'10'} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
