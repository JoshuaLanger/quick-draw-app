import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

import Target from './Target';
import { Heading3, Paragraph } from './Font';

const MainContainer = styled.main`
  max-width: 40rem;
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 1rem;
  grid-template-areas:
    'heading heading heading'
    '. target .'
    '. buttons .';
`;

const MainHeading = styled.span`
  grid-area: heading;
  text-align: center;
`;

const Rules = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  text-align: left;
`;

const DisplayScore = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -2;
  text-align: center;
`;

const BigAssScore = styled.span`
  font-size: 6rem;
  line-height: 1.6;
  font-family: ${props => props.theme.fontFamily['title']};
`;

const ButtonColumn = styled.div`
  padding: 1rem 0;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 1.6rem;
  align-items: center;

  @media screen and (min-width: 40rem) {
    grid-area: buttons;
  }
`;

const Icon = styled.button`
  border: none;
  width: 6.4rem;
  height: 6.4rem;
  background: ${props => props.theme.colors['oak-3']} url(${woodTexture});
  box-shadow: ${props => props.theme.shadow['default']};
  fill: ${props => props.theme.colors['oak-1']};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class Main extends Component {
  render() {
    const { score, state, isStartGame, isGameOver, message } = this.props;
    return (
      <MainContainer>
        {isStartGame && (
          <>
            {/* Only displays before the game */}
            <MainHeading>
              <Heading3>Get ready to draw!</Heading3>
            </MainHeading>
            <Rules>
              <Paragraph>
                Your goal each round is to shoot the target as soon as possible,
                by tapping the bottom button.
              </Paragraph>
              <Paragraph>It will tell you when the target is ready.</Paragraph>
              <Paragraph>
                The timer will count down how long you have to shoot the target.
              </Paragraph>
              <Paragraph>
                You lose when you fail to shoot it before time runs out, or when
                it's not yet ready.
              </Paragraph>
              <Paragraph>When you’re ready, press “START” to play.</Paragraph>
            </Rules>
          </>
        )}
        {!(isStartGame || isGameOver) && <Target state={state}/>}
        {isGameOver && (
          <>
            {/* Only displays before the game */}
            <MainHeading>
              <Heading3>Game Over!</Heading3>
            </MainHeading>
            <DisplayScore>
              <Paragraph>
                Well shoot, looks like you lost. Your final tally was
              </Paragraph>
              <BigAssScore>{score}</BigAssScore>
              <Paragraph>Hit "START" to try again!</Paragraph>
            </DisplayScore>
            <ButtonColumn>
              {/* SVG from https://iconmonstr.com/book-2-svg/*/}
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z" />
                </svg>
              </Icon>
              <Paragraph>Read the rules again</Paragraph>
            </ButtonColumn>
          </>
        )}
      </MainContainer>
    );
  }
}

Main.propTypes = {
  score: PropTypes.number,
  state: PropTypes.string,
  isStartGame: PropTypes.bool,
  isGameOver: PropTypes.bool,
  message: PropTypes.string
};

export default Main;
