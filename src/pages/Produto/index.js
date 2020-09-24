import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

const Produto = () => {
  const [produto, setProduto] = useState([]);

  const laodProduto = async () => {
    try {
      const response = await api.get('produto');
      const produtos = response.data;

      setProduto(produtos);
      console.log(produtos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    laodProduto();
  }, []);

  return (
    <>
      <Header title="Ecommerce" />

      {produto.map((pdt, index) => (
        <div key={index}>
          {pdt.nome}
          ,
          {pdt.id}
        </div>
      ))}

    </>
  );
};

export default Produto;
