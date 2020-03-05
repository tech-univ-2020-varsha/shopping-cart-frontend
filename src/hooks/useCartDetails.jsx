import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../constants/url';

const filterProducts = (array, key) => array.reduce((result, currentValue) => {
  // eslint-disable-next-line no-param-reassign
  (result[currentValue[key]] = result[currentValue[key]] || []).push(
    currentValue,
  );
  return result;
}, {});

const useCartDetails = () => {
  const [cartData, setCartData] = useState([]);
  const [catergorizedData, setCategorizedData] = useState([]);
  const [callComplete, setCallComplete] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(`${URL}/cart`);
        if (response.status === 200) {
          const cartDetails = response.data;
          let countTotal = 0;
          cartDetails.map((cart) => {
            countTotal += cart.quantity;
          });
          setCategorizedData(filterProducts(cartDetails, 'category'));
          setTotal(countTotal);
          setCartData(cartDetails);
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [cartData, callComplete, total, catergorizedData];
};

export default useCartDetails;
