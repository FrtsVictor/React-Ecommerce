import React, { useState } from 'react';
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

export default function BasicTextFields() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

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
        value={nome}
        onChange={(e) => { setNome(e.target.value); }}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        value={cpf}
        onChange={(e) => { setCpf(e.target.value); }}
      />

      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ width: '50%' }}
        type="button"
        onClick={() => apiFuncionario.create(newFunc)
          .then((resp) => console.log(resp))
          .catch((resp) => console.log(resp))}
      >
        Adicionar Funcionário
      </Button>
    </form>
  );
}
