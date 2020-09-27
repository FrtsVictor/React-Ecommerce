import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SelectCategoria from './SelectCategoria';
import SelectFuncionario from './SelectFuncionario';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtdEstoque, setqtdEstoque] = useState('');
  const [valor, setValor] = useState();
  const [idCategoria, setIdCategoria] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [fotoLink, setFotoLink] = useState('');

  const getCategoryID = (value) => (setIdCategoria(value));
  const getFuncID = (value) => (setIdFuncionario(value));

  const handleFormSubmit = () => [
    { nome },
    { descricao },
    { qtdEstoque },
    { valor },
    { idFuncionario },
    { idCategoria },
    { dataFabricacao },
    { fotoLink },
  ];

  const newProduto = handleFormSubmit();
  return (

    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => { setNome(e.target.value); }}
      />
      <TextField
        id="descricao"
        label="Descricao"
        variant="outlined"
        value={descricao}
        onChange={(e) => { setDescricao(e.target.value); }}
      />
      <TextField
        id="qtdEstoque"
        label="qtdEstoque"
        variant="outlined"
        value={qtdEstoque}
        onChange={(e) => { setqtdEstoque(e.target.value); }}
      />
      <TextField
        id="valor"
        label="valor"
        variant="outlined"
        value={valor}
        onChange={(e) => { setValor(e.target.value); }}
      />
      <TextField
        id="data-fabricacao"
        label="dataFabricacao"
        variant="outlined"
        value={dataFabricacao}
        onChange={(e) => { setDataFabricacao(e.target.value); }}
      />
      <TextField
        id="link-foto"
        label="Link_Foto"
        variant="outlined"
        value={fotoLink}
        onChange={(e) => { setFotoLink(e.target.value); }}
      />
      <SelectFuncionario getFuncID={getFuncID} />
      <SelectCategoria getCategoryID={getCategoryID} />
      <button type="button" onClick={() => console.log(newProduto)}>clickme</button>
    </form>
  );
}
