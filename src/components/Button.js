import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import woodTexture from '../assets/wood-texture.svg';

import { Heading4 } from './Font';

// have two button styles: "bar" and "icon"

const StyledButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  background: ${props => props.theme.colors['oak-3']};
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
