import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Bemvindo = () => (
    <>
    <Nav />
    <div>
    <h1>Bem-vindo ao TechTeam Ecommerce</h1>
    <p> Os melhores produtos com os menores preços</p>
    <button><Link to="/Home">Entrar</Link></button>
    </div>
    <Footer/>
    </>
  );
  
  export default Bemvindo;