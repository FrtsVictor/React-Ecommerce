import React from 'react';
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';

const Admin = () => {
  const produto = 'Produtos';
  const funcionario = 'Funcionarios';
  const cliente = 'Clientes';
  const carrinho = 'Carrinho de compras';

  return (
    <StyledCard>
      <Card title={produto} />
      <Card title={funcionario} />
      <Card title={cliente} />
      <Card title={carrinho} />
    </StyledCard>
  );
};
export default Admin;
