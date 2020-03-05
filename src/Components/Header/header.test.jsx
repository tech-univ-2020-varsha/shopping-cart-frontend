import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import routeData from 'react-router';
import { createMemoryHistory } from 'history';
import Header from './header';

describe('The Header component', () => {
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
    const { asFragment } = render(
      <Router history={history}>
        <Header
          total={1}
          setTotal={() => {}}
        />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
