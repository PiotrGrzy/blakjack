import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Game } from 'Pages/Game';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
    </Switch>
  </BrowserRouter>
);
