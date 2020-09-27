/* eslint-disable no-nested-ternary */
import React, {
  useState,
} from 'react';
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';
import Tabela from '../../components/TabelaProduto';
import Nav from '../../components/Nav';
import ModalItem from '../../components/Modal';

const Admin = () => {
  const [tableTitle, setTableTittle] = useState('Welcome!');// Pegando a pagina clicada

  const SetTableName = (TableTitle) => (setTableTittle(TableTitle));

  return (
    <>
      <Nav />

      <StyledCard>
        <ModalItem />
        <Card title="Produto" SetTableName={SetTableName} />
        <Card title="Categoria" SetTableName={SetTableName} />
        <Card title="Funcionario" SetTableName={SetTableName} />
        <Card title="Cliente" SetTableName={SetTableName} />
      </StyledCard>
      <h1>{tableTitle}</h1>

      <Tabela selectedColumn={tableTitle} />

      ;
    </>
  );
};
export default Admin;
