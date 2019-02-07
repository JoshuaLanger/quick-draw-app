import React, { Component } from 'react';
import { Title, Heading4 } from './Font';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.colors['oak-3']};
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fit, 1fr);
  align-items: center;

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
    grid-template-rows: 1fr;
  }
`;

const Info = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;
`;

class Header extends Component {
  render() {
    const { score, time, isStartGame, isGameOver } = this.props;
    return (
      <StyledHeader>
        <Content>
          <Title>Quick Draw!</Title>
          <Info>
            <Heading4>Score: {score}</Heading4>
            <Heading4>Time: {time}</Heading4>
          </Info>
        </Content>
      </StyledHeader>
    );
  }
}

export default Header;
