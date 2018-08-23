import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GunmanDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 4em auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media (min-width: 500px) {
    width: 160px;
    height: 160px;
  }
`;

const Gunman = props => {
  let color;
  switch (props.state) {
    case 'idle':
      color = '#2C779C';
      break;
    case 'ready':
      color = '#2CB45A';
      break;
    case 'shot':
      color = '#F65A3D';
      break;
    default:
      color = '#F1B53D';
      break;
  }

  return (
    <GunmanDiv onMouseDown={props.handleScore} style={{ background: color }} />
  );
};

Gunman.propTypes = {
  state: PropTypes.string.isRequired,
  handleScore: PropTypes.func.isRequired
};

export default Gunman;
