// @flow

import React, { PropTypes } from 'react';

const Button = ({ action, actionLabel }: {action: Object, actionLabel: string}) =>
  <button onClick={action}>{actionLabel}</button>;

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
