import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Categories from './categories';

describe('The Categories component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Categories data={[]} filter="All" total={1} setTotal={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
