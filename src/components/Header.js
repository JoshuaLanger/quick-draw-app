import React, { Component } from 'react';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.colors['oak-3']};
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;

  @media screen and (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
    grid-template-rows: 1fr;
  }
`;

const Content = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fit, 1fr);
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamily['title']};
  text-align: center;
`;

const Info = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;
`;

const Heading4 = styled.h4`
  font-size: 2.4rem;
  font-family: ${props => props.theme.fontFamily['head']};
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
