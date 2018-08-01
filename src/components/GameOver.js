import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../styled-components/LayoutStyle';
import Button from '../styled-components/ButtonStyle';
import Title from '../styled-components/TitleStyle';

const StartGameBtn = Button.extend`
  background: #E5B85C;
  margin: 0 auto;
  box-shadow: 4px 0 4px rgba(0,0,0,0.3);
`;

const BigAssScore = styled.p`
  font-size: 5em;
`;

const GameOver = props => {
  return (
    <Layout>
      <Title>
        <h1 style={{ fontFamily: 'Rye' }}>Quick Draw!</h1>
      </Title>
      <h2>{props.message}</h2>
      <h3>Your score is</h3>
      <BigAssScore>{props.score}</BigAssScore>
      <StartGameBtn onClick={props.handleClick}>Start Game</StartGameBtn>
    </Layout>
  );
};

GameOver.propTypes = {
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default GameOver;
