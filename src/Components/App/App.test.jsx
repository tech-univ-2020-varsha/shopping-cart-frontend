import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import URL from '../../constants/url';

describe('The App component', () => {
  const mockAxios = jest.spyOn(axios, 'get');
  mockAxios.mockResolvedValue({ data: [] });

  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should make an api call to fetch product details', () => {
    const { asFragment } = render(<App />);
    expect(mockAxios).toHaveBeenCalledWith(`${URL}/cart`);
  });
});
