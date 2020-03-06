import axios from 'axios';

import { renderHook, act } from '@testing-library/react-hooks';
import useCartCount from './useCartCount';
import URL from '../../constants/url';

describe('the useCartCount hook', () => {
  it('should make an api call to fetch count of all products in the cart', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    const { result } = renderHook(() => useCartCount());
    expect(mockAxios).toHaveBeenCalledWith(`${URL}/cart`);
    expect(result.current).toBeInstanceOf(Array);
  });

  it('should update the total when setTotal is called', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,

    } = renderHook(() => useCartCount());
    expect(result.current[0]).toEqual(0);
    act(() => {
      result.current[1](4);
    });
    expect(result.current[0]).toEqual(4);
  });
});
