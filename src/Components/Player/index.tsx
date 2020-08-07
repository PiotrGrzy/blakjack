import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addCards, playersStands, setNextPlayer } from 'Redux/actions/players';
import { RootState } from 'Redux/reducers';
import { CardsContainer } from 'Components/CardsContainer';
import { IPlayer } from 'Redux/actions/players/types';

type ButtonProps = {
  hit?: boolean;
};

const StyledPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayersActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

const PlayerButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 10rem;
  padding: 2rem;
  border-radius: 10px;
  color: ${(props) => (props.hit ? 'blue' : 'white')};
  background-color: ${(props) => (props.hit ? 'yellow' : 'grey')};
  border: none;
`;

interface Props {
  player: IPlayer;
}

export const Player: React.FC<Props> = ({ player }: Props) => {
  const { cards, points, id } = player;
  const deckId = useSelector((state: RootState) => state.deck.deckId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cards.length === 0 && deckId) {
      dispatch(addCards(2, deckId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckId, id]);

  const handleHit = () => {
    if (deckId) {
      dispatch(addCards(1, deckId));
    }
  };

  const handleStand = () => {
    dispatch(playersStands());
  };

  // if (status === 'passed' || status === 'lost') {
  //   dispatch(setNextPlayer(index + 1));
  // }
  return (
    <StyledPlayer>
      <PlayersActionsContainer>
        <PlayerButton hit onClick={handleHit}>
          Hit
        </PlayerButton>
        <PlayerButton onClick={handleStand}>Stand</PlayerButton>
      </PlayersActionsContainer>
      <CardsContainer cards={cards} />
      <p>Points: {points}</p>
    </StyledPlayer>
  );
};
