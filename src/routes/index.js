import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produto from '../pages/Produto';
import Admin from '../pages/Admin';

const Routes = () => (
  <Switch>

    <Route path="/home" component={Home} />
    <Route path="/produto" component={Produto} />
    <Route path="/admin" component={Admin} />

  </Switch>

);

export default Routes;
