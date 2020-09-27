/* eslint-disable no-nested-ternary */
import React, {
  useState,
} from 'react';
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';
import Tabela from '../../components/TabelaProduto';
import Nav from '../../components/Nav';
import StyledTitle from './styles';

const Admin = () => {
  const [tableTitle, setTableTittle] = useState('Bem vindo ao Admin!');// Pegando a pagina clicada

  const SetTableName = (TableTitle) => (setTableTittle(TableTitle));

  return (
    <>
      <Nav />

      <StyledCard>
        <Card title="Produto" SetTableName={SetTableName} />
        <Card title="Categoria" SetTableName={SetTableName} />
        <Card title="Funcionario" SetTableName={SetTableName} />
        <Card title="Cliente" SetTableName={SetTableName} />
      </StyledCard>
      <StyledTitle>
        <h1>{tableTitle}</h1>
      </StyledTitle>
      <Tabela selectedColumn={tableTitle} />

      ;
    </>
  );
};
export default Admin;
