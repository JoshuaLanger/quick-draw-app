import React, { Component } from 'react';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const HeaderStyle = styled.header`
  /* Mobile-first */
  padding: 0.625rem 3.75rem;
  background: #e5b85c url(${woodTexture});
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    padding: 0.625rem 20%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Brand = styled.h1`
  width: 240px;
  font-size: 2.25rem;
  font-family: 'Rye', sans-serif;
`;

const Info = styled.div`
  width: 240px;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
`;

class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <HeaderStyle>
        <Brand>Quick Draw!</Brand>
        <Info>
          <h2>Score: {score} </h2>
          {/* TODO: add timer */}
        </Info>
      </HeaderStyle>
    );
  }
}

export default Header;
