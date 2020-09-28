import React from 'react';
import {StyledCV} from './styles';
import { Link } from 'react-router-dom';

const telaCV = () => (

    <StyledCV>
        <div id="divCV">
        <i class="fas fa-exclamation-circle"></i>
            <p id="texto3">Oops!</p>
            <p id="texto4">Seu carrinho está vazio!</p>
            <Link to="/produto">
            <button id="botao2">Ver produtos</button>
            </Link>
        </div>
  
    </StyledCV>
  
  );
  
  export default telaCV;
  


