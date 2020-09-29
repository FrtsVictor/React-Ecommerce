import React from 'react';
import {StyledSucesso} from './styles';
import { Link } from 'react-router-dom';

const telaSucesso = () => {
    
    function clearStorage() {
        localStorage.clear();
        window.location.href = "/"
    }

    return (
    <StyledSucesso>
        <div id="divSucesso">
            <i class="far fa-check-circle"></i>
            <p id="texto1">Obrigado!</p>
            <p id="texto2">Compra realizada com sucesso!</p>
            <button onClick={() =>clearStorage()} id="botao">OK</button>
        </div>
  
    </StyledSucesso>
    ) 
    };
  
  export default telaSucesso;
  

