import React, { Component } from 'react';

import StartGame from './StartGame';
import GameOver from './GameOver';
import Header from './Header';
import Gunman from './Gunman';

import Layout from '../styled-components/LayoutStyle';

let roundFlag;
let gunmanReadyFlag;

let initialState = {
  score: 0,
  gunmanState: 'idle', // "idle", "ready", or "shot"
  startGame: true,
  gameOver: false,
  message: 'Ready...' // "Ready...", "Fire!", "Nice shot!", "You were shot!"
};

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
    // randomize time between 5 seconds and now
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
    const { score, gunmanState, startGame, gameOver, message } = this.state;

    return (
      <Layout onKeyPress={this.checkSpaceKey}>
        {startGame && <StartGame handleClick={this.newGame} />}
        {gameOver && (
          <GameOver
            handleClick={this.newGame}
            message={message}
            score={score}
          />
        )}
        <Header score={score} />
        <h1>{message}</h1>
        <Gunman
          state={gunmanState}
          handleScore={this.updateScore}
          handleKey={this.checkSpaceKey}
        />
      </Layout>
    );
  }
}

export default App;
