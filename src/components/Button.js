import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import woodTexture from '../assets/wood-texture.svg';

import { Heading4 } from './Font';

const StyledButton = styled.button`
  height: 8rem;
  width: 100%;
  border: none;
  background: ${props => props.theme.colors['oak-3']} url(${woodTexture});
  box-shadow: ${props => props.theme.shadow['default']};
  color: ${props =>
    props.theme.colors['oak-1']}; // Why not applied from Layout?
  text-align: center;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    const { message, isGameOver, handleClick } = this.props;

    // moveUp is currently defined in base.css
    let animClass = classNames({
      moveUp: isGameOver
    });

    return (
      <StyledButton className={animClass} onClick={handleClick}>
        <Heading4>{message}</Heading4>
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  message: 'START'
};

Button.propTypes = {
  message: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Button;
