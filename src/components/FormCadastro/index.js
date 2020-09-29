import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StyledCadastro from './styles';
import apiCliente from '../../services/apiCliente';

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
  const [cliente, setCliente] = useState({});
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  //   Endereco
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState(0);
  const [estado, setEstado] = useState('');

  const dataConverter = useCallback(
    () => {
      console.log(dataNascimento);
      const dataIso = new Date(dataNascimento).toISOString();
      const dataFormatada = dataIso.slice(0, 17).concat('00Z');
      console.log(dataFormatada);
      setDataNascimento(dataFormatada);
    }, [dataNascimento],
  );

  const mountCliente = () => (
    setCliente({
      nome,
      usuario,
      email,
      cpf,
      dataNascimento,
      endereco: {
        rua,
        bairro,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      },
    })
  );

  const send = () => {
    dataConverter();
    mountCliente();
    console.log(cliente);
    apiCliente.create(cliente)
      .then((resp) => resp)
      .catch((resp) => resp);
  };

  const classes = useStyles();

  return (
    <StyledCadastro className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2
              style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}
            >
              Bem Vindo! Precisamos do seu Cadastro para login.
            </h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Nome"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="nome"
                value={nome}
                onChange={(e) => {
                  console.log(e.target.name);
                  setNome(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                  required: true,
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
                fullWidth
                margin="normal"
                name="usuario"
                value={usuario}
                onChange={(e) => { setUsuario(e.target.value); }}
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
                fullWidth
                margin="normal"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
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
                fullWidth
                margin="normal"
                name="cpf"
                value={cpf}
                onChange={(e) => { setCpf(e.target.value); }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="date"
                margin="normal"
                style={{ margin: 8 }}
                label="DataNascimento"
                type="date"
                value={dataNascimento}
                onChange={(e) => {
                  setDataNascimento(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        {/* //___________________________________ENDERECO________________________________ */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} style={{ marginTop: '20px' }}>
            <h3>Endereço</h3>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                required
                label="*Rua"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="rua"
                value={rua}
                onChange={(e) => { setRua(e.target.value); }}
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
                fullWidth
                margin="normal"
                name="bairro"
                value={bairro}
                onChange={(e) => { setBairro(e.target.value); }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Complemento"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="complemento"
                value={complemento}
                onChange={(e) => { setComplemento(e.target.value); }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} sm={4}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-full-width"
                label="*Numero"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="numero"
                value={numero}
                onChange={(e) => { setNumero(parseInt(e.target.value, 10)); }}
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
                fullWidth
                type="number"
                margin="normal"
                name="cep"
                value={cep}
                onChange={(e) => { setCep(e.target.value); }}
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
                fullWidth
                margin="normal"
                name="cidade"
                value={cidade}
                onChange={(e) => { setCidade(e.target.value); }}
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
                label="*Estado"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="estado"
                value={estado}
                onChange={(e) => { setEstado(e.target.value); }}
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
              id="button"
              variant="contained"
              onClick={() => send()}
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
