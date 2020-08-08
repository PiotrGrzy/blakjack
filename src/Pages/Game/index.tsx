import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Redux/reducers';
import { Layout } from 'Components/Layout';
import { Player } from 'Components/Player';
import { IPlayer } from 'Redux/actions/players/types';
import { PlayersList } from 'Components/PlayersList';
import { setNextPlayer } from 'Redux/actions/players';
import { Redirect } from 'react-router-dom';
import { CheckIfLastPlaying } from 'Utils/methods';

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
    if (currentPlayer.index + 1 === list.length || CheckIfLastPlaying(list)) {
      return <Redirect to="/result" />;
    }
    dispatch(setNextPlayer(currentPlayer.index + 1));
  }

  return (
    <Layout>
      <PlayersList />
      {currentPlayer && <Player player={currentPlayer} />}
    </Layout>
  );
};
