import React, { Component } from 'react';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const ButtonStyle = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: none;
  background: #e5b85c url(${woodTexture});
  font-size: 1.2em;
  font-family: 'Cabin', 'Arial', sans-serif;
  padding: 1em 2em;
  cursor: pointer;

  @media (min-width: 500px) {
    position: static;
    display: inline-block;
    max-width: 20rem;
    margin: 3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

class Button extends Component {
  render() {
    const { message } = this.props;
    return <ButtonStyle>{message}</ButtonStyle>;
  }
}

export default Button;
