import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import apiProduto from '../../../services/apiProduto';

const BtnDeleteProduto = ({ id }) => {
  const classes = useStyles();
  return (
    <button
      variant="contained"
      color="default"
      size="small"
      className={classes.button}
      startIcon={<DeleteIcon />}
      onClick={() => apiProduto.delete(id)}
      type="button"
    >
      <IconButton aria-label="delete" className={classes.margin}>

        <DeleteIcon fontSize="large" />

      </IconButton>
    </button>
  );
};
export default BtnDeleteProduto;
