import React from 'react';
import propTypes from 'prop-types';


const Button = ({ buttonText, clickEvent, testid }) => (
  <button
    type="submit"
    className="buttonStyle"
    onClick={clickEvent}
    data-testid={testid}
  >
    {buttonText}
  </button>
);


Button.defaultProps = {
  testid: 'test-id',
};
Button.propTypes = {
  buttonText: propTypes.string.isRequired,
  clickEvent: propTypes.func.isRequired,
  testid: propTypes.string,
};
export default Button;
