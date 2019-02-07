import React, { Component } from 'react';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const StyledButton = styled.button`
  height: 8rem;
  width: 100%;
  border: none;
  background: ${props => props.theme.colors['oak-3']};
  text-align: center;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { message } = this.props;
    return <StyledButton>{message}</StyledButton>;
  }
}

export default Button;
