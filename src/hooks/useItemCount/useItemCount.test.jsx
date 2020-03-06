import axios from 'axios';

import { renderHook, act } from '@testing-library/react-hooks';
import useItemCount from './useItemCount';
import URL from '../../constants/url';

describe('the useItemCount hook', () => {
  it('should make an api call to fetch count of each item in the cart', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    const { result, waitForNextUpdate } = renderHook(() => useItemCount('1'));
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith(`${URL}/cart`);
    expect(result.current).toBeInstanceOf(Array);
  });
  it('should update the count value when setCount is invoked with new count value', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,

    } = renderHook(() => useItemCount('1'));
    expect(result.current[0]).toEqual(0);
    act(() => {
      result.current[1](4);
    });
    expect(result.current[0]).toEqual(4);
  });
});
