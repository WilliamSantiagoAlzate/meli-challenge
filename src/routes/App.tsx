import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Views
import HomeView from '../views/Home';
import DetailView from '../views/Detail';
import NotFoundView from '../views/NotFound';
import ResultsView from '../views/Results';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomeView} path="/" exact />
      <Route component={ResultsView} path="/items" exact />
      <Route component={DetailView} path="/items/:id" />
      <Route component={NotFoundView} />
    </Switch>
  </BrowserRouter>
);

export default App;