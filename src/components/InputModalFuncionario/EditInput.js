import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import apiFuncionario from '../../services/apiFuncionario';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({ nome, cpf, id }) {
  const classes = useStyles();
  const [nomes, setNomes] = useState('');
  const [cpfs, setCpfs] = useState('');

  const namess = useCallback(
    () => {
      setNomes(nome);
      setCpfs(cpf);
    },
    [nomes],
  );

  useEffect(() => {
    namess();
  }, []);

  const createFunc = () => (
    {
      nome,
      cpf,
    }
  );

  const newFunc = createFunc();

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
        id="cpf"
        label="CPF"
        variant="outlined"
        value={cpfs}
        onChange={(e) => { setCpfs(e.target.value); }}
      />

      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ width: '50%' }}
        type="button"
        onClick={() => apiFuncionario.update(id, newFunc)
          .then((resp) => console.log(resp))
          .catch((resp) => console.log(resp))}
      >
        Adicionar Funcionário
      </Button>
    </form>
  );
}
