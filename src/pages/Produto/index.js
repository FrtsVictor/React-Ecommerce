import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Nav from '../../components/Nav';
import './styles'
import { CardProdutoStyle, Filtros, CartBtn } from './styles';
import Footer from '../../components/Footer';
import semFoto from '../../assets/imgs/pdt-sem-imagem.png';

const Produto = () => {
  const [produto, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [filtroPreco, setFiltroPreco] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState([]);

  //primeira requisição - produtos filtrados todos
  const loadProduto = async () => {
    try {
      const response = await api.get('produto');
      let produtos = response.data;
    
      if (filtroCategoria.length > 0){
        console.log(filtroCategoria)
        produtos = produtos.filter(produto => produto.nomeCategoria === filtroCategoria)
      } 

      if (filtroPreco === 'min'){    
          produtos = produtos.sort((a, b) => a.valor - b.valor)       
      }if(filtroPreco === 'max'){
          produtos = produtos.sort((b, a) => a.valor - b.valor)   
      }
    
      
      setProduto(produtos);

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

  const addDefaultImg = (e) => {
    e.target.src = semFoto;
  }

  useEffect(() => {
    loadProduto();
    loadCategoria();
  }, [filtroCategoria, filtroPreco]);

  
  const addCart = (produto) => {
    const itens = JSON.parse(localStorage.getItem('cartItems')) || [];
    let alreadyExists = false;
    if(itens && itens.length > 0){
      itens.forEach((pdt) => {
        if (pdt.id === produto.id) {
          alreadyExists = true;
          pdt.count++;
        }
      });
    } 
   
    if (!alreadyExists) {
      itens.push({ ...produto, count:1 });     
    }
    localStorage.setItem("cartItems", JSON.stringify(itens));

  }


  return (
    <>
      <Nav />
      <Filtros>
        <div className="filtros">
          <div className="filtro-categoria">
            <label htmlFor="item-categoria">Filtrar por categoria</label>
            <select
              id="cat"
              name="item-categoria"
              value={filtroCategoria}
              onChange={(e) => {
                console.log(e.target.value)
                setFiltroCategoria(e.target.value)
              }}>
              
              <option value="">Todos</option>

              {categoria.map((cat, index) => (
                <option key={index} value={cat.nome}>{cat.nome}</option>
              ))}
            </select>
          </div>

          <div className="filtro-preco">
            <label htmlFor="item-preco">Filtrar por preço</label>
            <select name="item-preco" value={filtroPreco}
              onChange={(e) => setFiltroPreco(e.target.value)}>
                <option value='' >
                  --
                </option>
              <option value={'min'}>
                Menor preço
              </option>
              <option value={'max'}>
                Maior preço
              </option>
          </select>
        </div>
      </div>
    </Filtros>
    <CardProdutoStyle>
      {produto.map((pdt, index) => (
        <div className="container" key={index}>
          <div className="card">
            <p className="categoria">{pdt.nomeCategoria}</p>
            <img src={pdt.fotoLink} onError={addDefaultImg} alt="foto-produto" width="100%" />

            <h1>{pdt.nome}</h1>
            <p className="price">R${pdt.valor}</p>
            <p className="descricao">{pdt.descricao}</p>
            <button onClick={() => addCart(pdt)}>Adicionar ao carrinho</button>
          </div>
        </div>

      ))}
      <CartBtn>
      <div id="btn-carrinho">
          <Link to="/carrinho">
          <button> <i class="fas fa-shopping-cart"></i> Ir para o carrinho</button>
          </Link>  
      </div>
      </CartBtn>

    </CardProdutoStyle>
    <Footer />

  </>
);

};

export default Produto;