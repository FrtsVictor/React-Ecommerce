import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Nav from '../../components/Nav';
import './styles'
import {CardProdutoStyle, Filtros} from './styles';
import Footer from '../../components/Footer';
import semFoto from '../../assets/imgs/pdt-sem-imagem.png';
const Produto = () => {
  const [produto, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [precoFiltrado, setPrecoFiltrado] = useState([]);

  //primeira requisição - produtos filtrados todos
  const loadProduto = async () => {
    try {
      const response = await api.get('produto');
      const produtos = response.data;

      setProduto(produtos);
      setFiltrados(produtos);
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

  const loadPreco = async () => {
    try {
      const response = await api.get('produto');
      produto.valor = response.data;

      setPrecoFiltrado(produto.valor);
      console.log(produto.valor);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    loadProduto();
    loadCategoria();
    loadPreco()
  }, []);

//modificações no option (categoria)
  const [option, setOption] = useState('all')
  useEffect(() => {
    if (option === 'all'){
      setFiltrados(produto);
      return;
    }
    const filtradosTemp = produto.filter(pdt => {  
      if(pdt.nomeCategoria === option){
        console.log(pdt);
        return pdt;
      } 
    });
    setFiltrados(filtradosTemp);
  },[option])
 

  
const addDefaultImg = (e) => {
  e.target.src = semFoto;
}


const [precoOption, setPrecoOption] = useState('todos');

useEffect(() => {
  if(precoOption === 'todos'){
    setPrecoFiltrado(produto);
    return;
  }  
  const precoFiltrado = produto.filter(pdt=>{
    if (pdt.valor === "maior") {
      produto.sort((a, b) => (a.index > b.index ? 1 : -1));
  } else {
    produto.sort((a, b) =>
      pdt.valor === "menor"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
});
setPrecoFiltrado(precoFiltrado);
},[precoOption])

  return (
    <>
    <Nav />
    <Filtros>
      <div className="filtros">
      <div className="filtro-categoria">
    <label htmlFor="item-categoria">Filtrar por categoria</label>
      <select id="cat" name="item-categoria" value={option} onChange={(e)=> setOption(e.target.value)}>
      <option value="all">Todos</option>
        {categoria.map((cat, index) => (
        <option key={index} value={cat.nome}>{cat.nome}</option>
        ))}
      </select> 
      </div>

    <div className="filtro-preco">
      <label htmlFor="item-preco">Filtrar por preço</label>
      <select name="item-preco" value={precoOption} 
      onChange={(e)=> setPrecoOption(e.target.value)}>
      
      <option value='todos' >
          --
        </option>
        <option value='menor'>
         Menor preço
        </option>
        <option value='maior'>
          Maior preço
        </option>
      </select>
    </div>
    </div>
    </Filtros>
    <CardProdutoStyle>
  {filtrados.map((pdt, index) =>(
    <div className="container" key={index}>
      <div className="card">
        <p className="categoria">{pdt.nomeCategoria}</p>
        <img src={pdt.fotoLink} onError={addDefaultImg} alt="foto-produto" width="100%"/>
        
        <h1>{pdt.nome}</h1>
        <p className="price">R${pdt.valor}</p>
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