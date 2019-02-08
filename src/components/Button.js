import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import woodTexture from '../assets/wood-texture.svg';

import { Heading4 } from './Font';

// Have two button styles: "bar" and "icon"

const StyledButton = styled.button`
  height: ${props =>
    props.type === 'bar'
      ? props.theme.button.bar['height']
      : props.theme.button.icon['height']};
  width: ${props =>
    props.type === 'bar'
      ? props.theme.button.bar['width']
      : props.theme.button.icon['width']};
  border: none;
  background-color: ${props => props.theme.colors['oak-3']};
  background-image: ${props =>
    props.type === 'bar'
      ? props.theme.button.bar['backgroundImage']
      : props.theme.button.icon['backgroundImage']}, url(${woodTexture});
  box-shadow: ${props => props.theme.shadow['default']};
  color: ${props =>
    props.theme.colors['oak-1']}; // Why not applied from Layout?
  text-align: center;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { type, message } = this.props;
    return (
      <StyledButton type={type}>
        <Heading4>{message}</Heading4>
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  message: 'START'
};

Button.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default Button;
