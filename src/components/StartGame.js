import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../styled-components/LayoutStyle';
import Button from '../styled-components/ButtonStyle';
import Title from '../styled-components/TitleStyle';

const StartGameBtn = Button.extend`
  background: #E5B85C;
  margin: 0 auto;
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
`;

const StartGame = props => {
  return (
    <Layout>
      <Title>
        <h1 style={{ fontFamily: 'Rye' }}>Quick Draw!</h1>
      </Title>
      <h1>Welcome!</h1>
      <p>
        In this game, you'll be facing off against <strong>Bill Boxford</strong>
      </p>
      <p>To shoot, click or tap on Bill, or press Space</p>
      <p>
        When Bill is <strong>blue</strong>, get ready to fire
      </p>
      <p>
        <em>Don't shoot early, or you'll lose!</em>
      </p>
      <p>
        When he turns <strong>green</strong>, click on Bill to shoot as fast as
        you can!
      </p>
      <p>If you wait too long, Bill will shoot and you'll lose</p>
      <StartGameBtn onClick={props.handleClick}>Start Game</StartGameBtn>
    </Layout>
  );
};

StartGame.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default StartGame;
