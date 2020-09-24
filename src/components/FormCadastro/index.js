import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StyledCadastro from './StyledCadastro';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <StyledCadastro className={classes.root}>

      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <h2
              style={{ textAlign: 'center' }}
            >
              Bem Vindo!Precisamos do seu Cadastro para login.
            </h2>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Nome"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Usuario"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*E-mail"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*CPF"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Data Nascimento"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                type="date"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              Endereço
            </Paper>
          </Grid>
          {/* //___________________________________ENDERECO________________________________ */}
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                required
                label="*Rua"
                style={{ margin: 8 }}
                placeholder="Rua....."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Bairro"
                style={{ margin: 8 }}
                placeholder="..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Complemento"
                style={{ margin: 8 }}
                placeholder="...."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*CEP"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Cidade"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{
              justifyItems: 'center',
              display: 'grid',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                height: '50px',
                width: '150px',
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>

    </StyledCadastro>

  );
}
