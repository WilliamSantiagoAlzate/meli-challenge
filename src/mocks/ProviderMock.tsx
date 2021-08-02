import { createStore, Store } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { rootReducer } from '../redux/reducers';
import { state } from './data';

export const initialStore: Store = createStore(rootReducer);

export const ProviderMock: React.FC = ({ children }) => (
  <Provider store={initialStore}>
    <BrowserRouter>
      <Switch>
        <Route>
          {children}
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

const mockStore = configureStore();
const store = mockStore(state);
store.dispatch = jest.fn();

export const ProviderMockStore: React.FC = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route>
          {children}
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);