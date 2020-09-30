import React from 'react';
import { StyledSucesso } from './styles';

const telaSucesso = () => {
  function clearStorage() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <StyledSucesso>
      <div id="divSucesso">
        <i className="far fa-check-circle" />
        <p id="texto1">Obrigado!</p>
        <p id="texto2">Compra realizada com sucesso!</p>
        <button type="button" onClick={() => clearStorage()} id="botao">OK</button>
      </div>

    </StyledSucesso>
  );
};

export default telaSucesso;
