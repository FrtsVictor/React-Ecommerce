import React from 'react';
import {StyledFooter} from './styles';
import logo from '../../assets/imgs/site-seguro.png';

const Footer = () => (

  <StyledFooter>

    <div className="flex-container">
      <img className="img" src={logo} alt="logo"></img>
      <p className="texto"><em>Desenvolvido por TechTeam \o/</em></p>
      <div className="icones">   
        <a href="https://instagram.com" className="fa fa-instagram" target="_blank"></a>
        <a href="https//facebook.com" className="fa fa-facebook" target="_blank"></a>
        <a href="https://twitter.com" className="fa fa-twitter" target="_blank"></a>
      </div>    
    </div>

  </StyledFooter>

);

export default Footer;
