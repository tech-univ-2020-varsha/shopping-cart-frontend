import React from 'react';
import { render } from '@testing-library/react';
import Tabs from './tabs';

describe('The Tabs component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tabs
      products={[]}
      filterProduct={{}}
      total={1}
      setTotal={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
