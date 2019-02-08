import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    '. . .';
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
  font-family: ${props => props.theme.fontFamily['title']};
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
        {!(isStartGame || isGameOver) && <Target />}
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
