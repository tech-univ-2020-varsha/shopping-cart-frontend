import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import useProduct from '../../hooks/useProduct';
import Tabs from '../Tabs/tabs';
import useCartCount from '../../hooks/useCartCount';

const App = () => {
  const [products, filterProduct, callComplete] = useProduct();
  const [total, setTotal, callCompleteTotal] = useCartCount();
  console.log(callCompleteTotal);
  if (callComplete) { console.log(filterProduct); }
  if (callCompleteTotal) { console.log(total); }
  return (
    <div className="App">
      <Header total={total} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Tabs products={products} filterProduct={filterProduct} total={total} setTotal={setTotal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default App;
