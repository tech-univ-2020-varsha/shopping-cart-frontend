import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import SummaryCard from './summaryCard';

describe('The Summary Card component', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    const { asFragment } = render(
      <Router history={history}>
        <SummaryCard
          cartTotal={1}
          setTotal={() => {}}
        />

      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
