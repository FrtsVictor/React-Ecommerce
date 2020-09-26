/* eslint-disable no-nested-ternary */
<<<<<<< HEAD
import React, {
  useState,
} from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> 116240148275c28f5d64136b848b902393872031
import Card from '../../components/CardAdmin';
import StyledCard from '../../components/CardAdmin/sytles';
import Tabela from '../../components/TabelaProduto';
import Nav from '../../components/Nav';
<<<<<<< HEAD
import ModalItem from '../../components/Modal';
=======
import apiProduto from '../../services/apiProduto';
import apiCategoria from '../../services/apiCategoria';
import apiFuncionario from '../../services/apiFuncionario';
>>>>>>> 116240148275c28f5d64136b848b902393872031

const Admin = () => {
  const [tableTitle, setTableTittle] = useState('Welcome!');// Pegando a pagina clicada

<<<<<<< HEAD
  const SetTableName = (TableTitle) => (setTableTittle(TableTitle));
=======
  const [listaProduto, setListaProduto] = useState([]); // Pegando lista de produto
  const [listaCategoria, setListaCategoria] = useState([]);
  const [listaFunc, setListaFunc] = useState([]);

  const [arrayColumn, setArrayColumn] = useState([]);
  const [coluna, setColuna] = useState([]);

  const columns = coluna;

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
  }, [loadLists]);
>>>>>>> 116240148275c28f5d64136b848b902393872031

  return (
    <>
      <Nav />

      <StyledCard>
<<<<<<< HEAD
        <ModalItem />
        <Card title="Produto" SetTableName={SetTableName} />
        <Card title="Categoria" SetTableName={SetTableName} />
        <Card title="Funcionario" SetTableName={SetTableName} />
        <Card title="Cliente" SetTableName={SetTableName} />
      </StyledCard>
      <h1>{tableTitle}</h1>

      <Tabela selectedColumn={tableTitle} />

      ;
=======
        <Card title="Produto" selectTable={setTableTittle} selectedTable="Produto" />
        <Card title="Categoria" selectTable={setTableTittle} selectedTable="Categoria" />
        <Card title="Funcionario" selectTable={setTableTittle} selectedTable="Funcionario" />
        <Card title="Cliente" selectTable={setTableTittle} selectedTable="Cliente" />
      </StyledCard>
      <h1>{tableTitle}</h1>
      <Tabela selectColumn={setColuna} selectedColumn={tableTitle} listaProduto={listaProduto} />
>>>>>>> 116240148275c28f5d64136b848b902393872031
    </>
  );
};
export default Admin;
