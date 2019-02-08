import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTarget = styled.div`
  margin: 0 auto;
  height: 16rem;
  width: 16rem;
  background: ${props => props.theme.colors[props.color]};
  transform: rotate(45deg);
  box-shadow: ${props => props.theme.shadow['target']};
  grid-area: target;

  @media (min-width: 40em) {
    width: 20rem;
    height: 20rem;
  }
`;

class Target extends Component {
  render() {
    const { state } = this.props;

    let color;
    switch (state) {
      case 'idle':
        color = "blue";
        break;
      case 'ready':
        color = "green";
        break;
      case 'shot':
        color = "red";
        break;
      default:
        color = "oak-3";
    };
    return <StyledTarget color={color}/>;
  }
}

Target.propTypes = {
  state: PropTypes.string.isRequired
};

export default Target;
