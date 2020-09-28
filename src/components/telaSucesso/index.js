import React from 'react';
import {StyledSucesso} from './styles';
import { Link } from 'react-router-dom';

const telaSucesso = () => (

    <StyledSucesso>
        <div id="divSucesso">
            <i class="far fa-check-circle"></i>
            <p id="texto1">Obrigado!</p>
            <p id="texto2">Compra realizada com sucesso!</p>
            <Link to="/">
            <button id="botao">OK</button>
            </Link>
        </div>
  
    </StyledSucesso>
  
  );
  
  export default telaSucesso;
  

