import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player />);
});
it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});
it('renders correct score', () => {
    const playerScore = 3;
    const playerComponent = shallow(<Player score={playerScore} />);

    const playerScoreRendered = playerComponent.find('.Player__score').text();

    expect(Number(playerScoreRendered)).toEqual(playerScore);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    //Zwraca pierwszy element (0)
    const plusButton = playerComponent.find('.Player__button').at(0);

    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    //Zwraca drugi element player button(1)
    const minusButton = playerComponent.find('.Player__button').at(1);

    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove when plus button is clicked', () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);

    const deleteButton = playerComponent.find('.Player__remove');

    deleteButton.simulate('click');

    expect(mockedOnPlayerRemove);
});