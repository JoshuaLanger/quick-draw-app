import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Target from './Target';
import { Heading3, Paragraph } from './Font';

const MainContainer = styled.main`
  background-color: pink;
  max-width: 40rem;
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  grid-template-rows: repeat(3, auto);
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

class Main extends Component {
  render() {
    const { state, isStartGame, isGameOver, message } = this.props;
    return (
      <MainContainer>
        {isStartGame && (
          <MainHeading>
            <Heading3>Shoot or be shot!</Heading3>
            <Rules>
              <Paragraph>Your goal each round is to shoot the target as soon as possible, by tapping the bottom button.</Paragraph>
              <Paragraph>It will tell you when the target is ready.</Paragraph>
              <Paragraph>The timer will count down how long you have to shoot the target.</Paragraph>
              <Paragraph>You lose when you fail to shoot it before time runs out, or when it's not yet ready.</Paragraph>
              <Paragraph>When you’re ready, press “START” to play.</Paragraph>
            </Rules>
          </MainHeading>
        )}
        {false && <Target />}
      </MainContainer>
    );
  }
}

Main.propTypes = {
  state: PropTypes.string,
  isStartGame: PropTypes.bool,
  isGameOver: PropTypes.bool,
  message: PropTypes.string
};

export default Main;
