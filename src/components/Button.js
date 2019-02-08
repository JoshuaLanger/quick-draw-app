import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import woodTexture from '../assets/wood-texture.svg';

import { Heading4 } from './Font';

// have two button styles: "bar" and "icon"

const StyledButton = styled.button`
  height: ${props => props.theme.button.bar['height']};
  width: ${props => props.theme.button.bar['width']};
  border: none;
  background-color: ${props => props.theme.colors['oak-3']};
  background-image: ${props => props.theme.button.bar['backgroundImage']};
  box-shadow: ${props => props.theme.shadow['default']}
  color: ${props =>
    props.theme.colors['oak-1']}; // Why not applied from Layout?
  text-align: center;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { message } = this.props;
    return (
      <StyledButton>
        <Heading4>{message}</Heading4>
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  message: 'START'
};

Button.propTypes = {
  message: PropTypes.string
};

export default Button;
