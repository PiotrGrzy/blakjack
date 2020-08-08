import React from 'react';
import styled, { css, IStyledComponentWithTheme } from 'styled-components';
import { IPlayer } from 'Redux/actions/players/types';

interface LiProps {
  status: string;
  active: boolean;
}

const StyledLi = styled.li<LiProps>`
  ${({ theme }: IStyledComponentWithTheme) => css`
    color: ${(props: LiProps) => {
      switch (props.status) {
        case 'playing':
          return theme.colors.gold;
        case 'lost':
          return theme.colors.grey;
        default:
          return theme.colors.white;
      }
    }};
    display: inline-block;
    font-size: ${theme.fontSize.normal};
    height: min-content;
    text-decoration: none;
    width: 18rem;
    padding: 2rem;
    background-color: #101110;
    border-radius: 2rem;
    border: ${(props: LiProps) =>
      props.active
        ? `2px solid ${theme.colors.gold}`
        : '2px solid transparent'};

    transition: color 0.2s;
    &:hover {
      color: ${theme.colors.gold};
    }
  `}
`;

interface Props {
  player: IPlayer;
  current?: string;
}

export const PlayersListElement: React.FC<Props> = ({
  player,
  current,
}: Props) => {
  return (
    <StyledLi status={player.status} active={player.id === current}>
      <h3>Player {player.index + 1}</h3>
      <p>Points: {player.points}</p>
      <p>Status: {player.status}</p>
    </StyledLi>
  );
};
