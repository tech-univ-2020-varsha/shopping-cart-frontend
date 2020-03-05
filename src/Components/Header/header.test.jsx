import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './header';

describe('The Header component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
