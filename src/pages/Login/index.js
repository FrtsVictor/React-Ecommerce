import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hook/auth';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import StyledCadastro from '../../components/FormCadastro/styles';

function Copyright() {
  return (
   
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/FrtsVictor/React-Ecommerce">
        TechTEAM :)
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  // hooks, chamando sign In do useAuth
  const { signIn } = useAuth();
  // controla historico de rotas, qd tem nova pagina, damos um push, funciona como lista de rota
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    if (!usuario) return;
    // quando clico, seta carregando
    setLoading(true);

    try {
      await signIn(email, usuario);
      console.log('Login Sucess');
      history.push('/produto');
    } catch (error) {
      console.log('Login  error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Nav/>
     <StyledCadastro>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          TechTeam - Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Usuario"
            type="password"
            id="password"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="gray" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            id="button">
            {loading ? 'Loading' : 'Entrar'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Esqueceu seu usuario?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/cadastro" variant="body2">
                Nao possui conta? Criar Conta
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </StyledCadastro>
    <Footer/>
    </>
  );
  
}
