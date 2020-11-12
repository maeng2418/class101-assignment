import React from 'react';
import { Layout } from './components';
import { Product } from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Product />
      </Layout>
    </div>
  );
};

export default App;
