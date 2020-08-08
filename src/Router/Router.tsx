import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Game } from 'Pages/Game';
import { Results } from 'Pages/Results';
import { Options } from 'Pages/Options';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/options" exact component={Options} />
      <Route path="/game" exact component={Game} />
      <Route path="/result" exact component={Results} />
    </Switch>
  </BrowserRouter>
);
