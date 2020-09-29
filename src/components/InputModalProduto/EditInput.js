import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateInput from './EditDateInput';
import Selects from './styles';
import apiProduto from '../../services/apiProduto';

import SelectCategoria from './EditSelectCategoria';
import SelectFuncionario from './EditSelectFuncionario';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function InputModalProduto({
  nome, descricao, qtd, valor, func, cat, dataFab, id,
}) {
  const classes = useStyles();
  const [nomes, setNomes] = useState('');
  const [descricaos, setDescricaos] = useState('');
  const [qtdEstoques, setqtdEstoques] = useState('');
  const [valors, setValors] = useState();
  const [idCategorias, setIdCategorias] = useState('');
  const [idFuncionarios, setIdFuncionarios] = useState('');
  const [dataFabricacaos, setDataFabricacaos] = useState('');
  const [fotoLinks, setFotoLinks] = useState('');

  const getCategoryID = useCallback((catId) => (setIdCategorias(parseFloat(catId))), []);
  const getFuncID = useCallback((funcId) => (setIdFuncionarios(parseFloat(funcId))), []);
  const getDate = useCallback((date) => (setDataFabricacaos(date)), []);

  const handleFormSubmit = () => ({
    nome: nomes,
    descricao: descricaos,
    qtdEstoque: qtdEstoques,
    valor: valors,
    idCategoria: idCategorias,
    idFuncionario: idFuncionarios,
    dataFabricacao: dataFabricacaos,
    fotoLink: fotoLinks,
  });

  const updateProd = useCallback(
    () => {
      setNomes(nome);
      setDescricaos(descricao);
      setqtdEstoques(qtd);
      setValors(valor);
      setIdCategorias(cat);
      setIdFuncionarios(func);
      setDataFabricacaos(dataFab);
    },
    [nomes],
  );

  useEffect(() => {
    updateProd();
  }, []);

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        value={nomes}
        onChange={(e) => { setNomes(e.target.value); }}
      />
      <TextField
        id="descricao"
        label="Descricao"
        variant="outlined"
        value={descricaos}
        onChange={(e) => { setDescricaos(e.target.value); }}
      />
      <TextField
        id="qtdEstoque"
        label="Quantidade em estoque"
        variant="outlined"
        value={qtdEstoques}
        onChange={(e) => { setqtdEstoques(parseFloat(e.target.value)); }}
      />
      <TextField
        id="valor"
        label="Valor"
        variant="outlined"
        value={valors}
        onChange={(e) => { setValors(parseFloat(e.target.value)); }}
      />

      <TextField
        id="link-foto"
        label="Foto do Produto (link)"
        variant="outlined"
        value={fotoLinks}
        onChange={(e) => { setFotoLinks(e.target.value); }}
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
          apiProduto.update(id, handleFormSubmit())
            .then((resp) => console.log(resp))
            .catch((resp) => console.log(resp));
        }}
      >
        Atualizar
      </Button>
    </form>
  );
}

export default InputModalProduto;
