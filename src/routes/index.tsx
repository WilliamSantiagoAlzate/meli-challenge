import { Switch, Route } from 'react-router-dom';
// Views
import HomeView from '../views/Home';
import DetailView from '../views/Detail';
import NotFoundView from '../views/NotFound';
import ResultsView from '../views/Results';

export const Routes: React.FC = () => (
  <Switch>
    <Route component={HomeView} path="/" exact />
    <Route component={ResultsView} path="/items?search=" exact />
    <Route component={DetailView} path="/items/:id" />
    <Route component={NotFoundView} />
  </Switch>
);