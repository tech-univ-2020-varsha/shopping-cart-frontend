import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Router } from 'react-router-dom';
import routeData from 'react-router';
import { createMemoryHistory } from 'history';
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
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><Checkout /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
