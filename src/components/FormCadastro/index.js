import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
    <StyledCadastro>
      <div className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Bem Vindo!Precisamos do seu Cadastro para login.</h2>
              </Paper>

            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-full-width"
                  label="Nome"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
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
                  label="Usuario"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
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
                  label="Cpf"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
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
                  label="email"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
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
                  label="Data Nascimento"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </form>
      </div>

    </StyledCadastro>

  );
}
