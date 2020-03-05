import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from './tabs';

describe('The Tabs component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tabs products={[]} filterProduct={{}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
