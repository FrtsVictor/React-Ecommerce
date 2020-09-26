import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Nav from '../../components/Nav';
import { CardProdutoStyle } from './styles';

import Footer from '../../components/Footer';
import semFoto from '../../assets/imgs/pdt-sem-imagem.png';

const Produto = () => {
  const [produto, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const loadProduto = async () => {
    try {
      const response = await api.get('produto');
      const produtos = response.data;

      setProduto(produtos);
      console.log(produtos);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCategoria = async () => {
    try {
      const response = await api.get('categoria');
      const categorias = response.data;

      setCategoria(categorias);
      console.log(categorias);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduto();
    loadCategoria();
  }, []);

  const [option, setOption] = useState('');
  const filtrados = produto.filter((pdt) => {
    if (pdt.nomeCategoria === option) {
      console.log(pdt);
      // return pdt;
    }

    console.log(pdt);
    return pdt;
  });

  const filtroPreco = (max, min) => {
    produto.filter((pdt) => pdt.valor <= max && pdt.valor >= min);
  };

  const [preco, setPreco] = useState('');

  filtroPreco(preco[0], preco[1]);

  console.log(preco);

  return (
    <>
      <Nav />

      <div className="filtros">
        <div className="filtro-categoria">
          <label htmlFor="item-categoria">Filtrar por categoria</label>
          <select id="cat" name="item-categoria" value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="all">Todos</option>
            {categoria.map((cat, index) => (
              <option key={index} value={cat.nome}>{cat.nome}</option>
            ))}
            {/* {console.log(option)} */}
          </select>
        </div>

        <div className="filtro-preco">
          <label htmlFor="item-preco">Filtrar por preço</label>
          <select name="item-preco" value={preco} onChange={(e) => setPreco(e.target.value.split(' '))}>
            <option value="0 100">
              Até 100
            </option>
            <option value="101 500">
              100 até 500
            </option>
            <option value="501 10000">
              Acima 500
            </option>
          </select>
        </div>
      </div>

      <CardProdutoStyle>
        {filtrados.map((pdt, index) => (
          <div className="container" key={index}>
            <div className="card">
              <p className="categoria">{pdt.nomeCategoria}</p>
              <img src={pdt.fotoLink} alt="foto-produto" width="100%" />

              {/* if (src={pdt.fotoLink} != null) {
          <img src={pdt.fotoLink} alt="foto-produto" width="100%"/>
        } else {
          <img src={semFoto} alt="foto-produto" width="100%"/>
        } */}

              <h1>{pdt.nome}</h1>
              <p className="price">
                R$
                {pdt.valor}
              </p>
              <p className="descricao">{pdt.descricao}</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

        ))}

      </CardProdutoStyle>
      <Footer />

    </>
  );
};

export default Produto;
