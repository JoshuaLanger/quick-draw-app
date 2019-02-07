import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTarget = styled.div`
  margin: 0 auto;
  height: 16rem;
  width: 16rem;
  background: ${props => props.theme.colors['blue']};
  transform: rotate(45deg);
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.4);
  grid-area: target;

  @media (min-width: 40em) {
    width: 20rem;
    height: 20rem;
  }
`;

class Target extends Component {
  render() {
    const { state, handleScore } = this.props;
    return <StyledTarget onMouseDown={handleScore} />;
  }
}

Target.propTypes = {
  state: PropTypes.string.isRequired,
  handleScore: PropTypes.func.isRequired
};

export default Target;
