import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const Button = props => (
  <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
