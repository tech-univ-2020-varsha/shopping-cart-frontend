import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../constants/url';


const useCart = (id) => {
  const [count, setCount] = useState(0);
  const [callComplete, setCallComplete] = useState(null);


  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(`${URL}/cart`);
        if (response.status === 200) {
          const cartDetails = response.data;
          cartDetails.map((cart) => {
            if (cart.id === id) {
              setCount(cart.quantity);
            }
          });
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);

  return [count, setCount, callComplete];
};

export default useCart;
