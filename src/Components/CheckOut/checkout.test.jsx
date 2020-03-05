import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkout from './checkout';

describe('The Checkout component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Checkout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
