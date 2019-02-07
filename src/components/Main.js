import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Target from './Target';
import { Heading3 } from './Font';

const MainContainer = styled.main`
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

class Main extends Component {
  render() {
    const { state, isStartGame, isGameOver, message } = this.props;
    return (
      <MainContainer>
        {isStartGame && (
          <MainHeading>
            <Heading3>Shoot or be shot!</Heading3>
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
