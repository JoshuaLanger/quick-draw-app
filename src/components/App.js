import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../themes/theme';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

let roundFlag;
let gunmanReadyFlag;

let initialState = {
  score: 0,
  time: 0,
  targetState: 'idle', // "idle", "ready", or "shot"
  isStartGame: true,
  isGameOver: false,
  message: 'Ready...' // "Ready...", "Fire!", "Nice shot!", "You were shot!"
};

// Styled Components
const Layout = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colors['oak-5']};
  color: ${props => props.theme.colors['oak-1']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

class App extends Component {
  state = initialState;

  newGame = () => {
    this.setState(prevState => initialState);
    this.newRound();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.checkSpaceKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.checkSpaceKey, false);
  }

  checkSpaceKey = e => {
    if (!this.state.startGame && !this.state.gameOver && e.keyCode === 32)
      this.updateScore();
  };

  newRound = () => {
    this.setState(prevState => ({
      startGame: false,
      gameOver: false,
      gunmanState: 'idle',
      message: 'Ready...'
    }));
    // Randomize time between 5 seconds and now
    let time = Math.random() * 5000;
    roundFlag = setTimeout(this.gunmanReady, time);
  };

  gunmanReady = () => {
    clearTimeout(roundFlag);
    this.setState(prevState => ({
      gunmanState: 'ready',
      message: 'Fire!'
    }));
    // Inverse function
    // The higher the score, the less time you have to shoot
    let time = 6000 / (this.state.score + 1);
    gunmanReadyFlag = setTimeout(this.gunmanFire, time);
  };

  gunmanFire = () => {
    clearTimeout(gunmanReadyFlag);
    this.setState(prevState => ({
      gunmanState: 'idle',
      gameOver: true,
      message: "You've been shot! Game over"
    }));
  };

  updateScore = () => {
    switch (this.state.gunmanState) {
      case 'idle':
        clearTimeout(gunmanReadyFlag);
        clearTimeout(roundFlag);
        this.setState(prevState => ({
          message: 'Ya shot too soon pardner! Game over',
          gameOver: true
        }));
        break;
      case 'ready':
        clearTimeout(gunmanReadyFlag);
        this.setState(prevState => ({
          score: prevState.score + 1,
          gunmanState: 'shot',
          message: 'Nice shot!'
        }));
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
        <Layout onKeyPress={this.checkSpaceKey}>
          <Header
            score={score}
            time={time}
            isStartGame={isStartGame}
            isGameOver={isGameOver}
          />
          <Main
            state={targetState}
            isStartGame={isStartGame}
            isGameOver={isGameOver}
            message={message}
          />
          <Footer message={message} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
