import React from 'react';
import {StyledFooter} from './styles';
import logo from '../../assets/imgs/site-seguro.png';

const Footer = () => (

  <StyledFooter>

    <div className="flex-container">
      <img className="img" src={logo}></img>
      <p className="texto"><em>Desenvolvido por TechTeam \o/</em></p>
      <div className="icones">   
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
      </div>    
    </div>

  </StyledFooter>

);

export default Footer;
