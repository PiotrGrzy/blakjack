import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlayersListElement } from 'Components/PlayersListElement';
import { IPlayer } from 'Redux/actions/players/types';
import { RootState } from 'Redux/reducers';

const StyledList = styled.div`
  margin-top: 4rem;
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    @media only screen and (max-width: 649px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: row;
    }
  }
`;

export const PlayersList: React.FC = () => {
  const { list, currentPlayerId } = useSelector(
    (state: RootState) => state.players
  );

  return (
    <StyledList>
      <ul>
        {list.map((player: IPlayer) => (
          <PlayersListElement
            player={player}
            key={player.id}
            current={currentPlayerId}
          />
        ))}
      </ul>
    </StyledList>
  );
};
