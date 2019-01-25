import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

const { TouchableOpacity } = ReactNative;

const Button = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
};

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
