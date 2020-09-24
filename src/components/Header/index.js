import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHead, Title } from './styles';

const Header = ({ title }) => (
  <>
    <Title>{title}</Title>
    <StyledHead>
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/produto">
            Protudos
          </Link>
        </li>
      </ul>
    </StyledHead>
  </>
);
export default Header;
