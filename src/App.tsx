import React from 'react';
import { Layout } from './components';
import { Product, Cart } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
};

export default App;
