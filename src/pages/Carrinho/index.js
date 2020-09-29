import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import logobg from '../../assets/imgs/logobg.png';
import { Container, Logo } from './styles';

const Bemvindo = () => (
  <>
    <Container>
      <div className="background">

        <Logo>
          <div className="logo">
            <img src={logobg} alt="logo" width="600" height="200" />
          </div>
        </Logo>

        <div>
          <p className="descricao"> Os melhores produtos com os menores preços</p>
        </div>
        <div className="btn">
          <Link to="/home">
            <button>Entrar</button>
          </Link>
        </div>
      </div>
    </Container>
    <Footer />
  </>
);

export default Bemvindo;
