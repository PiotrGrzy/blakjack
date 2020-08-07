import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Redux/reducers';
import { Layout } from 'Components/Layout';
import { GameOptions } from 'Components/GameOptions';
import { Player } from 'Components/Player';
import { IPlayer } from 'Redux/actions/players/types';
import { PlayersList } from 'Components/PlayersList';
import { endGame } from 'Redux/actions/deck';
import { setNextPlayer } from 'Redux/actions/players';
import { Redirect } from 'react-router-dom';

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPlayerId, list } = useSelector(
    (state: RootState) => state.players
  );
  const currentPlayer = list.find(
    (player: IPlayer) => player.id === currentPlayerId
  );

  if (
    currentPlayer &&
    (currentPlayer.status === 'passed' || currentPlayer.status === 'lost')
  ) {
    if (currentPlayer.index + 1 === list.length) {
      return <Redirect to="/result" />;
    }
    dispatch(setNextPlayer(currentPlayer.index + 1));
  }

  return (
    <Layout>
      <PlayersList />
      <div>The Game</div>;
      <GameOptions />
      {currentPlayer && <Player player={currentPlayer} />}
    </Layout>
  );
};
