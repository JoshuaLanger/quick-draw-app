import React, { Component } from 'react';
import { Title, Heading4 } from './Font';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import woodTexture from '../assets/wood-texture.svg';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.colors['oak-3']} url(${woodTexture});
  box-shadow: ${props => props.theme.shadow['default']};
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
    grid-template-columns: ${props => (props.solo ? '1fr' : '1fr 1fr')};
    grid-column-gap: 8rem;
    grid-template-rows: 1fr;
  }
`;

const Info = styled.div`
  justify-self: left;
  margin-left: 1.6rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;

  @media screen and (min-width: 640px) {
    margin-left: 0rem;
  }
`;

class Header extends Component {
  render() {
    const { score, time, isStartGame, isGameOver } = this.props;
    return (
      <StyledHeader>
        {/* set "solo = true" to have Title appear in the center when the Info box is gone during the game */}
        <Content solo={isStartGame || isGameOver}>
          <Title>Quick Draw!</Title>
          {!(isStartGame || isGameOver) && (
            <Info>
              <Heading4>Score: {score}</Heading4>
              <Heading4>Time: {time}</Heading4>
            </Info>
          )}
        </Content>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number,
  time: PropTypes.string, // The toFixed method had been applied, rendering this prop a string
  isStartGame: PropTypes.bool,
  isGameOver: PropTypes.bool
};

export default Header;
