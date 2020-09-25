import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produto from '../pages/Produto';
import Admin from '../pages/Admin';
import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho'
import Bemvindo from '../pages/Bemvindo'

const Routes = () => (
  <Switch>

    <Route path="/" component={Bemvindo} exact/>
    <Route path="/home" component={Home} />
    <Route path="/produto" component={Produto} />
    <Route path="/admin" component={Admin} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/carrinho" component={Carrinho} />

  </Switch>

);

export default Routes;
