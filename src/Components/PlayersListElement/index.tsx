import React from 'react';
import styled from 'styled-components';
import { IPlayer } from 'Redux/actions/players/types';

const StyledLi = styled.li`
  display: block;
  padding: 2rem;
  text-align: center;
`;
interface Props {
  player: IPlayer;
  index: number;
}

export const PlayersListElement: React.FC<Props> = ({
  player,
  index,
}: Props) => {
  return (
    <StyledLi>
      <h2>Player {index + 1}</h2>
      <h4>Status: {player.status}</h4>
    </StyledLi>
  );
};
