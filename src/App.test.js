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
  const players = appComponent.state('players');
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate')
  onScoreUpdate(0, 25);
  const playersAfterUpdate = appComponent.state('players');
  expect(playersAfterUpdate[0].score).toEqual(30)

});

it('should update player list - add player', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[1].score).toEqual(0);
});

it('should update player list - remove player', () => {
  const appComponent = shallow(<App />);

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');

  expect(appComponent.state('players').length).toEqual(2);
  onPlayerRemove(0);
  expect(appComponent.state('players').length).toEqual(1);

});