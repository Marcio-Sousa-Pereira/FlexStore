import React from 'react';
import { Switch, Route } from 'react-router-dom';

//importação dos componentes
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}