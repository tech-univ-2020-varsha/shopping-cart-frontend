import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../constants/url';

const useCartCount = () => {
  const [total, setTotal] = useState(0);
  const [callCompleteTotal, setCallCompleteTotal] = useState(null);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(`${URL}/cart`);
        if (response.status === 200) {
          let totalCount = 0;
          const cartDetails = response.data;
          cartDetails.map((cart) => {
            totalCount += cart.quantity;
          });
          setTotal(totalCount);
          setCallCompleteTotal(true);
        }
      } catch (err) {
        console.log(err);
        setCallCompleteTotal(false);
      }
    };
    asyncFunc();
  }, [total]);
  return [total, setTotal, callCompleteTotal];
};

export default useCartCount;
