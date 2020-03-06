import { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../constants/url';

const filterProducts = (array, key) => array.reduce((result, currentValue) => {
  // eslint-disable-next-line no-param-reassign
  (result[currentValue[key]] = result[currentValue[key]] || []).push(
    currentValue,
  );
  return result;
}, {});

const useProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [callComplete, setCallComplete] = useState(null);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(`${URL}/products`);
        if (response.status === 200) {
          const productDetails = response.data;
          setAllProducts(productDetails);
          setFilterProduct(filterProducts(productDetails, 'category'));
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [allProducts, filterProduct, callComplete];
};
export default useProduct;
