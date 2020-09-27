import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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


  const handleFormSubmit = () => [
    { nome },
    { cpf },
  ];

  const newFuncionario = handleFormSubmit();
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
    
      <Button type="button" size="small" color="primary" onClick={() => console.log(newFuncionario)}>Adicionar Funcionário</Button>
    </form>
  );
}
