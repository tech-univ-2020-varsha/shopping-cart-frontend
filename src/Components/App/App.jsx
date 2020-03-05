import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import useProduct from '../../hooks/useProduct';
import Tabs from '../Tabs/tabs';

const App = () => {
  const [products, filterProduct, callComplete] = useProduct();
  if (callComplete) { console.log(filterProduct); }
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Tabs products={products} filterProduct={filterProduct} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default App;
