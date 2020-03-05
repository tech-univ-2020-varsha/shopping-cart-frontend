import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import useCartCount from '../../hooks/useCartCount';
import Tabs from '../Tabs/tabs';

import Checkout from '../CheckOut/checkout';

const App = () => {
  const [total, setTotal, callCompleteTotal] = useCartCount();
  if (!callCompleteTotal) return <div>Loading!...</div>;
  return (
    <div>
      <Router>
        <Header total={total} setTotal={setTotal} />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Tabs total={total} setTotal={setTotal} />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};


export default App;
