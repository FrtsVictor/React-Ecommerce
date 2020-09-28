import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Produto from '../pages/Produto';
import Admin from '../pages/Admin';
import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho';
import Bemvindo from '../pages/Bemvindo';
import Login from '../pages/Login';
import Route from './Route';

const Routes = () => (
  <Switch>

    <Route path="/" component={Bemvindo} exact />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/produto" component={Produto} isPrivate />
    <Route path="/admin" component={Admin} isPrivate />
    <Route path="/cadastro" component={Cadastro} isPrivate />
    <Route path="/carrinho" component={Carrinho} isPrivate />

  </Switch>

);

export default Routes;
