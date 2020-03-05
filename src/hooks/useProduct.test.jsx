import axios from 'axios';

import { renderHook } from '@testing-library/react-hooks';
import useProduct from './useProduct';
import URL from '../constants/url';

describe('the useProduct hook', () => {
  it('should make an api call to fetch allProducts and filterProduct,', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    const { result, waitForNextUpdate } = renderHook(() => useProduct());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith(`${URL}/products`);
    expect(result.current).toBeInstanceOf(Array);
  });
});
