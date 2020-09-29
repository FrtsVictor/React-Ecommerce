import React, { useContext, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ContextLists } from '../../services/ListsContext';

const createLabelOption = (lista) => lista.reduce((listaCat, cat) => {
  const catLabel = {
    value: cat.id,
    label: cat.nome,
  };
  return [...listaCat, catLabel];
}, []);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({ getCategoryID }) {
  const { listaCategoria } = useContext(ContextLists);
  const labelCategory = useMemo(() => createLabelOption(listaCategoria), [listaCategoria]);
  const [labelOption, setLabelOption] = useState('Escolha Categoria');
  const classes = useStyles();
  const handleChange = (event) => {
    setLabelOption(event.target.value);
  };

  getCategoryID(labelOption);
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="cat-id"
          select
          outline
          label="CATEGORIA DO PRODUTO"
          value={labelOption}
          onChange={handleChange}
          placeholder="Selecione a categoria do produto!"
        >
          {labelCategory.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </>
  );
}
