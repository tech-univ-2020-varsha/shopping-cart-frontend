import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './itemCard';

describe('The Item Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ItemCard
      id={1}
      name="name"
      price={1}
      quantity={1}
      imageLink="imageLink"
      category="All"
      total={1}
      setTotal={() => {}}
      sold={false}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
