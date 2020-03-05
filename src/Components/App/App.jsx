import React from 'react';
import './App.css';
import Header from '../Header/header';
import useProduct from '../../hooks/useProduct';

const App = () => {
  const [products, filterProduct, callComplete] = useProduct();
  if (callComplete) { console.log(filterProduct); }
  return (
    <div className="App">
      <Header />
    </div>
  );
};


export default App;
