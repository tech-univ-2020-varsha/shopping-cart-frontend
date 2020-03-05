import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import useProduct from '../../hooks/useProduct';
import Tabs from '../Tabs/tabs';
import useCartCount from '../../hooks/useCartCount';
import Checkout from '../CheckOut/checkout';

const App = () => {
  const [products, filterProduct, callComplete] = useProduct();
  const [total, setTotal, callCompleteTotal] = useCartCount();
  if (!callComplete || !callCompleteTotal) return <div>Loading!...</div>;
  return (
    <div className="App">
      <Header total={total} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Tabs products={products} filterProduct={filterProduct} total={total} setTotal={setTotal} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default App;
