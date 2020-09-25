import React from 'react';
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';
import Nav from '../../components/Nav';

const Admin = () => {
  const produto = 'Produtos';
  const funcionario = 'Funcionarios';
  const cliente = 'Clientes';
  const carrinho = 'Carrinho de compras';

  return (
    <>
    <Nav />
    <StyledCard>
      <Card title={produto} />
      <Card title={funcionario} />
      <Card title={cliente} />
      <Card title={carrinho} />
    </StyledCard>
    </>
  );
};
export default Admin;
