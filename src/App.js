import React, { Component } from 'react';
import './App.css';
import PlayersList from './PlayersList';
import AddPlayer from './AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        },
        {
          name: 'Antoś',
          score: 0,
        }
      ]
    }
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }

  RemovePlayer = (playerIndex) => {
    //console.log("start ", this.state.players)
    this.setState({
      players: this.state.players.filter(function (item, index) {
        //console.log(item, index, playerIndex);
        return index !== playerIndex;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.RemovePlayer} />

      </div>
    );
  }
}

export default App;