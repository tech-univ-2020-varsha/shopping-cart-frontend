import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { Router } from 'react-router-dom';
import routeData from 'react-router';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Checkout from './checkout';

describe('The Checkout component', () => {
  const mockLocation = {
    pathname: '/welcome',
    hash: '',
    search: '',
    state: '',
  };
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });
  const mockAxios = jest.spyOn(axios, 'get');
  mockAxios.mockResolvedValue({ data: [] });
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><Checkout /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should make an api call to fetch cart details', () => {
    const history = createMemoryHistory();
    act(() => {
      const { asFragment } = render(<Router history={history}><Checkout /></Router>);
      expect(mockAxios).toHaveBeenCalled();
    });
  });
});
