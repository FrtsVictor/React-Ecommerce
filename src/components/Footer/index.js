/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { StyledFooter } from './styles';
import logo from '../../assets/imgs/site-seguro.png';

const Footer = () => (

  <StyledFooter>

    <div className="flex-container">
      <img className="img" src={logo} alt="logo" />
      <p className="texto"><em>Desenvolvido por TechTeam \o/</em></p>
      <div className="icones">
        <a href="https://instagram.com" className="fa fa-instagram" target="_blank" />
        <a href="https//facebook.com" className="fa fa-facebook" target="_blank" />
        <a href="https://twitter.com" className="fa fa-twitter" target="_blank" />
      </div>
    </div>

  </StyledFooter>

);

export default Footer;
