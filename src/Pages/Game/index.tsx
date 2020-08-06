import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/reducers';
import { Layout } from 'Components/Layout';
import { GameOptions } from 'Components/GameOptions';
import { Player } from 'Components/Player';

export const Game: React.FC = () => {
  const { currentPlayerId, list } = useSelector(
    (state: RootState) => state.players
  );
  const currentPlayer = list.find((player) => player.id === currentPlayerId);
  return (
    <Layout>
      <div>The Game</div>;
      <GameOptions />
      {currentPlayer && <Player player={currentPlayer} />}
    </Layout>
  );
};
