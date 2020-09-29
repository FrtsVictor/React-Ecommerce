import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import apiCategoria from '../../services/apiCategoria';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function InputModalCategoria({ nome, descricao, id }) {
  const classes = useStyles();
  const [nomes, setNomes] = useState('');
  const [descricaos, setDescricaos] = useState('');

  const namess = useCallback(
    () => {
      setNomes(nome);
      setDescricaos(descricao);
    },
    [nomes],
  );

  useEffect(() => {
    namess();
  }, []);

  const createCat = () => (
    {
      nome,
      descricao,
    }
  );

  const newCat = createCat();

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="categoria"
        label="Categoria"
        variant="outlined"
        value={nomes}
        onChange={(e) => { setNomes(e.target.value); }}
      />
      <TextField
        id="descricao"
        label="Descrição"
        variant="outlined"
        value={descricaos}
        onChange={(e) => { setDescricaos(e.target.value); }}
      />

      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ width: '50%' }}
        type="button"
        onClick={() => apiCategoria.update(id, newCat)
          .then((resp) => console.log(resp))
          .catch((resp) => console.log(resp))}
      >
        AlterarCategoria

      </Button>
    </form>
  );
}

export default InputModalCategoria;
