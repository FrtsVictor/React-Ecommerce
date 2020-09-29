import React, { useState } from 'react';
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

function InputModalCategoria() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

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
        value={nome}
        onChange={(e) => { setNome(e.target.value); }}
      />
      <TextField
        id="descricao"
        label="Descrição"
        variant="outlined"
        value={descricao}
        onChange={(e) => { setDescricao(e.target.value); }}
      />

      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ width: '50%' }}
        type="button"
        onClick={() => apiCategoria.create(newCat)
          .then((resp) => console.log(resp))
          .catch((resp) => console.log(resp))}
      >
        Adicionar Categoria
      </Button>
    </form>
  );
}

export default InputModalCategoria;
