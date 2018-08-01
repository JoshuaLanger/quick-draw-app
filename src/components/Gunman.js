import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GunmanDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 4em auto;
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
  cursor: pointer;
`;

const Gunman = props => {
  let color;
  switch (props.state) {
    case "idle":
      color = "blue";
      break;
    case "ready":
      color = "green";
      break;
    case "shot":
      color = "red";
      break;
    default:
      color = "yellow";
      break;
  }

  return (
    <GunmanDiv onClick={props.handleScore} style={{ background: color }} />
  );
};

Gunman.propTypes = {
  state: PropTypes.string.isRequired,
  handleScore: PropTypes.func.isRequired
};

export default Gunman;
