import React from 'react';
import Player from './Player';
import './PlayersList.css';

const PlayersList = (props) => (
    <ul className="PlayersList">
        {props.players.map((player, i) => (
            <Player
                key={i}
                name={player.name}
                score={player.score}
                onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
                onPlayerRemove={(i) => props.RemovePlayer(i)}
            />)
        )}
    </ul>
);


export default PlayersList;