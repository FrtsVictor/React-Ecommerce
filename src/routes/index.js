import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produto from '../pages/Produto';
import Admin from '../pages/Admin';
import Cadastro from '../pages/Cadastro';

const Routes = () => (
  <Switch>

    <Route path="/" component={Home} exact />
    <Route path="/produto" component={Produto} />
    <Route path="/admin" component={Admin} />
    <Route path="/cadastro" component={Cadastro} />

  </Switch>

);

export default Routes;
