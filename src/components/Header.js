import React, { Component } from 'react';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const TitleStyle = styled.header`
  background: #e5b85c url(${woodTexture});
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 4em;
  display: flex;
  justify-content: space-around;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <TitleStyle>
        <h1 style={{ fontFamily: 'Rye' }}>Quick Draw!</h1>
        <h2>Score: {score}</h2>
        <h2>Time: 0:00</h2>
      </TitleStyle>
    );
  }
}

export default Header;
