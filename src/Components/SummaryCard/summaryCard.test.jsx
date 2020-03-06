import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import SummaryCard from './summaryCard';

describe('The Summary Card component', () => {
  const history = createMemoryHistory();
  const mockAxios = jest.spyOn(axios, 'get');
  mockAxios.mockResolvedValue({ data: [] });

  it('should render correctly', () => {
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

  it('should make an api call when checkout button is called', () => {
    const { getByTestId } = render(
      <Router
        history={history}
      >
        <SummaryCard
          cartTotal={1}
          setTotal={() => {}}
        />
      </Router>,
    );
    fireEvent.click(getByTestId('checkoutbtn'));

    expect(mockAxios).toHaveBeenCalled();
  });
});
