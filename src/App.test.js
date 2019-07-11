import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList'

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [];
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  const playersAfterUpdate = appComponent.state('players');
  expect(onScoreUpdate).toEqual(playersAfterUpdate[0]);
});