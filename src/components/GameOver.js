import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../styled-components/LayoutStyle';
import Button from '../styled-components/ButtonStyle';
import Title from '../styled-components/TitleStyle';

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
      <Button onClick={props.handleClick}>Start Game</Button>
    </Layout>
  );
};

GameOver.propTypes = {
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default GameOver;
