/* eslint-disable no-nested-ternary */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import { StyledButton } from './sytles';
import ModalProduto from '../Modal/ModalProduto';
import ModalCategoria from '../Modal/ModalCategoria';
import ModalFuncionario from '../Modal/ModalFuncionario';
// import ModalCliente from '../Modal/ModalCliente';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({ title, SetTableName, ModalItem }) {
  const classes = useStyles();
  console.log('modalItem', ModalItem);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia/>
        <BuildSharpIcon fontSize="large" style={{margin: "25px", color: '#333'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color: '#333'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledButton>
          <Button
            size="default"
            color="primary"
            onClick={() => {
              SetTableName(title);
            }}
          >
            Listar
          </Button>
          { title === 'Produto' ? (
            <ModalProduto />
          ) : title === 'Categoria' ? (
            <ModalCategoria />
          ) : title === 'Funcionario' ? (
            <ModalFuncionario />
          // ) : title === 'Cliente' ? (
          //   <ModalCliente />
          ) : ''}
          
          <Button size="default" color="primary" onClick={() => SetTableName(title)}>
            Remover
          </Button>
        </StyledButton>
      </CardActions>
    </Card>
  );
}
