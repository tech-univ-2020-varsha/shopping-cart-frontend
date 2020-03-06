import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './button';

describe('the button component', () => {
  it('should render correctly', () => {
    const click = () => {
    };
    const { asFragment } = render(<Button
      buttonText="text"
      clickEvent={click}
      testid="btn-test-id"
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the click function on click event', () => {
    const click = jest.fn();
    const { getByTestId } = render(<Button
      buttonText="text"
      clickEvent={click}
      testid="btn-test-id"
    />);

    fireEvent.click(getByTestId('btn-test-id'));
    expect(click).toHaveBeenCalled();
  });
});
