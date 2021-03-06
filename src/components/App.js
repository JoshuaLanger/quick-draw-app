import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../themes/theme';
import diamondTexture from '../assets/diamond-texture.svg';

import Header from './Header';
import Main from './Main';
import Button from './Button';

// Styled Components (must be outside App component)
const Layout = styled.div`
  height: 100vh;
  background: ${props => props.theme.colors['oak-5']} url(${diamondTexture});
  color: ${props => props.theme.colors['oak-1']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

// Define flags for timeout functions
let roundFlag;
let targetReadyFlag;
let timeCounter;

let initialState = {
  score: 0,
  time: (0).toFixed(2), // renders as a string
  targetState: 'idle', // "idle", "ready", or "shot"
  isStartGame: true,
  isGameOver: false,
  message: 'START' // "START", "Ready...", "Fire!", "Nice shot!", "You were shot!"
};

class App extends Component {
  state = initialState;

  startGame = () => {
    this.setState(prevState => initialState);
  };

  newGame = () => {
    this.setState(prevState => initialState);
    this.newRound();
  };

  newRound = () => {
    this.setState(prevState => ({
      time: (0).toFixed(2),
      isStartGame: false,
      isGameOver: false,
      targetState: 'idle',
      message: 'Ready...'
    }));
    // Randomize time between 5 seconds and now
    let time = Math.random() * 5000;
    roundFlag = setTimeout(this.targetReady, time);
  };

  targetReady = () => {
    clearTimeout(roundFlag);
    this.setState(prevState => ({
      targetState: 'ready',
      message: 'Fire!'
    }));
    // Inverse function
    // The higher the score, the less time you have to shoot
    let msTime = (6000 / (this.state.score + 1)).toFixed(2);
    this.setState(prevState => ({
      time: (msTime / 1000).toFixed(2)
    }));
    // Update state.time with this time every 10 ms while target is 'ready'
    timeCounter = setInterval(() => {
      msTime -= 10;
      this.setState(prevState => ({
        time: (msTime / 1000).toFixed(2)
      }));
    }, 10);
    // Execute 'targetFire' function if no response within 'time'
    targetReadyFlag = setTimeout(this.targetFire, msTime);
  };

  targetFire = () => {
    clearTimeout(targetReadyFlag);
    clearInterval(timeCounter);
    this.setState(prevState => ({
      targetState: 'idle',
      isGameOver: true,
      message: 'Well shoot, looks like you lost.'
    }));
  };

  updateScore = () => {
    clearInterval(timeCounter);
    switch (this.state.targetState) {
      case 'idle':
        clearTimeout(targetReadyFlag);
        clearTimeout(roundFlag);
        this.setState(prevState => ({
          message: 'Ya shot too soon, pardner!',
          isGameOver: true
        }));
        break;
      case 'ready':
        clearTimeout(targetReadyFlag);
        this.setState(prevState => ({
          score: prevState.score + 1,
          targetState: 'shot',
          message: 'Nice shot!'
        }));
        // Set new round after 3 seconds
        setTimeout(this.newRound, 3000);
        break;
      case 'shot':
      default:
        return null;
    }
  };

  render() {
    const {
      score,
      time,
      targetState,
      isStartGame,
      isGameOver,
      message
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Header
            score={score}
            time={time}
            isStartGame={isStartGame}
            isGameOver={isGameOver}
          />
          <Main
            score={score}
            state={targetState}
            isStartGame={isStartGame}
            isGameOver={isGameOver}
            message={message}
            handleClick={this.startGame}
          />
          {isStartGame || isGameOver ? (
            <Button
              message={'START'}
              isGameOver={isGameOver}
              handleClick={this.newGame}
            />
          ) : (
            <Button message={message} handleClick={this.updateScore} />
          )}
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
