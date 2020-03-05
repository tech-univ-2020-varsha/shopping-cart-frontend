import axios from 'axios';

import { renderHook } from '@testing-library/react-hooks';
import useItemCount from './useItemCount';
import URL from '../constants/url';

describe('the useProduct hook', () => {
  it('should make an api call to fetch allProducts and filterProduct,', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    const { result, waitForNextUpdate } = renderHook(() => useItemCount('1'));
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith(`${URL}/cart`);
    expect(result.current).toBeInstanceOf(Array);
  });
});
