import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import apiFuncionario from '../../../services/apiFuncionario';
import useStyles from './styles';

const BtnDeleteFuncionario = ({ id }) => {
  const classes = useStyles();
  return (
    <button
      variant="contained"
      color="default"
      size="small"
      className={classes.button}
      startIcon={<DeleteIcon />}
      onClick={() => apiFuncionario.delete(id)}
      type="button"
    >
      <IconButton aria-label="delete" className={classes.margin}>

        <DeleteIcon fontSize="large" />

      </IconButton>
    </button>
  );
};

export default BtnDeleteFuncionario;
