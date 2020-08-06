import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Redux/reducers';
import { Layout } from 'Components/Layout';
import { GameOptions } from 'Components/GameOptions';
import { Player } from 'Components/Player';
import { IPlayer } from 'Redux/actions/players/types';
import { PlayersList } from 'Components/PlayersList';
import { Results } from 'Components/Results';

export const Game: React.FC = () => {
  const { currentPlayerId, list } = useSelector(
    (state: RootState) => state.players
  );
  const currentPlayer = list.find(
    (player: IPlayer) => player.id === currentPlayerId
  );

  return (
    <Layout>
      <PlayersList />
      <div>The Game</div>;
      <GameOptions />
      {currentPlayer && <Player player={currentPlayer} />}
      <Results />
    </Layout>
  );
};
