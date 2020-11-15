import React from 'react';
import { Layout } from './components';
import { Product, Cart } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { reducer, initialState, StateProvider } from './context';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <StateProvider initialState={initialState} reducer={reducer}>
          <Layout>
            <Switch>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/">
                <Product />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </div>
    </Router>
  );
};

export default App;
