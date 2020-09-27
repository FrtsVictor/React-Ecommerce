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

// BasicTextFields

function InputModalCategoria() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');


  const handleFormSubmit = () => [
    { nome },
    { descricao },
  ];

  const newCategoria = handleFormSubmit();
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
    
      <Button type="button" size="small" color="primary" onClick={() => console.log(newCategoria)}>Adicionar Categoria</Button>
    </form>
  );
}

export default InputModalCategoria;