import React, { useState } from 'react';
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';
import Tabela from '../../components/TabelaProduto';
import Nav from '../../components/Nav';

const Admin = () => {
  const [table, setTable] = useState('');

  return (
    <>
      <Nav />
      <StyledCard>
        <Card title="Produto" selectTable={setTable} selectedTable="Produto" />
        <Card title="Funcionario" selectTable={setTable} selectedTable="Funcionario" />
        <Card title="Cliente" selectTable={setTable} selectedTable="Cliente" />
        <Card title="Carrinho" selectTable={setTable} selectedTable="Carrinho" />
      </StyledCard>
      <h1>{table}</h1>
      <Tabela />
    </>
  );
};
export default Admin;
