import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SummaryCard from './summaryCard';

describe('The Summary Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SummaryCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
