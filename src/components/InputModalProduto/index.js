import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateInput from './DateInput';
import Selects from './styles';
import apiProduto from '../../services/apiProduto';

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

function InputModalProduto() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtdEstoque, setqtdEstoque] = useState('');
  const [valor, setValor] = useState();
  const [idCategoria, setIdCategoria] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [fotoLink, setFotoLink] = useState('');

  const getCategoryID = (catId) => (setIdCategoria(parseFloat(catId)));
  const getFuncID = (funcId) => (setIdFuncionario(parseFloat(funcId)));
  const getDate = (date) => (setDataFabricacao(date));

  const handleFormSubmit = () => ({
    nome,
    descricao,
    qtdEstoque,
    valor,
    idCategoria,
    idFuncionario,
    dataFabricacao,
    fotoLink,
  });

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
        label="Quantidade em estoque"
        variant="outlined"
        value={qtdEstoque}
        onChange={(e) => { setqtdEstoque(parseFloat(e.target.value)); }}
      />
      <TextField
        id="valor"
        label="Valor"
        variant="outlined"
        value={valor}
        onChange={(e) => { setValor(parseFloat(e.target.value)); }}
      />

      <TextField
        id="link-foto"
        label="Foto do Produto (link)"
        variant="outlined"
        value={fotoLink}
        onChange={(e) => { setFotoLink(e.target.value); }}
      />
      <DateInput getDate={getDate} />
      <Selects>
        <SelectFuncionario getFuncID={getFuncID} />
        <SelectCategoria getCategoryID={getCategoryID} />
      </Selects>
      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ width: '50%' }}
        type="button"
        onClick={() => {
          apiProduto.create(handleFormSubmit())
            .then((resp) => console.log(resp))
            .catch((resp) => console.log(resp));
        }}
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default InputModalProduto;
