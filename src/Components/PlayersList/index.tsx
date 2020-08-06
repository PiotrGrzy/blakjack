import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlayersListElement } from 'Components/PlayersListElement';
import { IPlayer } from 'Redux/actions/players/types';
import { RootState } from 'Redux/reducers';

const StyledList = styled.div`
  ul {
    display: flex;
    justify-items: flex-end;
    list-style: none;
  }
`;

export const PlayersList: React.FC = () => {
  const players = useSelector((state: RootState) => state.players.list);
  return (
    <StyledList>
      <ul>
        {players.map((player: IPlayer, i: number) => (
          <PlayersListElement player={player} index={i} key={player.id} />
        ))}
      </ul>
    </StyledList>
  );
};
