import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList'
import AddPlayer from './AddPlayer'

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [];
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  const playersAfterUpdate = appComponent.state('players');
  playersAfterUpdate[0]
});

it('should update player list', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[1].score).toEqual(0);
});

it('should update player list', () => {
  const appComponent = shallow(<App />);

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove('Magda');
  const players = appComponent.state('players');

  expect(players.length).toEqual(-1);
  //expect(players[2].name).toEqual('Ania');
  //expect(players[1].score).toEqual(0);
});