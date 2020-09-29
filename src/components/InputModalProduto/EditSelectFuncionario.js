import React, { useContext, useState, useMemo } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { ContextLists } from '../../services/ListsContext';

const createLabelOption = (lista) => lista.reduce((listaFunc, cat) => {
  const catLabel = {
    value: cat.id,
    label: cat.nome,
  };
  return [...listaFunc, catLabel];
}, []);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({ getFuncID }) {
  const { listaFunc } = useContext(ContextLists);
  const classes = useStyles();
  const labelCategory = useMemo(() => createLabelOption(listaFunc), [listaFunc]);
  const [labelOption, setLabelOption] = useState('Escolha Categoria');

  const handleChange = (event) => {
    setLabelOption(event.target.value);
  };

  getFuncID(labelOption);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="func-id"
        select
        outline
        label="SELECIONE O FUNCIONARIO"
        value={labelOption}
        onChange={handleChange}
        placeholder="SELECIONE O FUNCIONARIO"
      >
        {labelCategory.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
