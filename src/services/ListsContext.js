/* eslint-disable no-nested-ternary */
import React, {
  createContext, useState, useEffect, useCallback,
} from 'react';
import apiProduto from './apiProduto';
import apiCategoria from './apiCategoria';
import apiFuncionario from './apiFuncionario';

export const ContextLists = createContext({});

const ListProvider = ({ children }) => {
  const [listaProduto, setListaProduto] = useState([]); // Pegando lista de produto
  const [listaCategoria, setListaCategoria] = useState([]);
  const [listaFunc, setListaFunc] = useState([]);

  const sortList = (list) => list.sort((a, b) => (a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0));
  const loadLists = useCallback(
    () => {
      apiProduto.loadAll()
        .then((response) => {
          setListaProduto(sortList(response));
        }).catch(() => {
          console.log('Something is wrong, sorry (:');
        });
      apiCategoria.loadAll()
        .then((response) => {
          setListaCategoria(sortList(response));
        }).catch(() => {
          console.log('Something is wrong, sorry (:');
        });
      apiFuncionario.loadAll()
        .then((response) => {
          setListaFunc(sortList(response));
        }).catch(() => {
          console.log('Something is wrong, sorry (:');
        });
    }, [],
  );

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <ContextLists.Provider value={{ listaProduto, listaCategoria, listaFunc }}>
      {children}
    </ContextLists.Provider>

  );
};

export default ListProvider;
