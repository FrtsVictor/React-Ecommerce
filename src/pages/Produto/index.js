import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Nav from '../../components/Nav';
import './styles'
import {CardProdutoStyle} from './styles';
const Produto = () => {
  const [produto, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
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

  const laodCategoria = async () => {
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
    laodProduto();
    laodCategoria();
  }, []);

  const [option, setOption] = useState('')
  const filtrados = produto.filter(pdt => {  
    if(option == 'all'){
      return produto;
    }
    return pdt.nomeCategoria == option 
  })

  const filtroPreco = (max,min) => {
     produto.filter(pdt => pdt.valor <= max && pdt.valor >=min)
  }
  
  const [preco, setPreco] = useState('')

 
filtroPreco(preco[0], preco[1]);


console.log(preco);

  return (
    <>
    <Nav />

      <div className="filtros">
      <div className="filtro-categoria">
      <label for="item-categoria">Filtrar por categoria</label>
      <select id="cat" name="item-categoria" value={option} onChange={(e)=> setOption(e.target.value)}>
      <option value="all">Todos</option>
        {categoria.map((cat, index) => (
        <option key={index} value={cat.nome}>{cat.nome}</option>
        ))}
        {console.log(option)}
      </select> 
      </div>
      </div>

    <div className="filtro-preco">
      <label for="item-preco">Filtrar por preço</label>
      <select name="item-preco" value={preco} onChange={(e)=> setPreco(e.target.value.split(" "))}>
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
  
    <CardProdutoStyle>
  {filtrados.map((pdt, index) =>(
    <div className="container">
      <div key={index} className="card">
        <p className="categoria">{pdt.nomeCategoria}</p>
        <img src={pdt.fotoLink} alt="" width="100%"/>
        <h1>{pdt.nome}</h1>
        <p className="price">R${pdt.valor}</p>
        <p className="descricao">{pdt.descricao}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
    
  ))}

    </CardProdutoStyle>

</>
);

};

export default Produto;