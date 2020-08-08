import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'Styles/components';
import { addCards, playersStands } from 'Redux/actions/players';
import { RootState } from 'Redux/reducers';
import { Cards } from 'Components/Cards';
import { IPlayer } from 'Redux/actions/players/types';

type ButtonProps = {
  hit?: boolean;
};

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const PlayersActionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const PlayerButton = styled(Button)<ButtonProps>`
  color: ${(props) => (props.hit ? '#7596f0' : '#f57369')};
  width: 12rem;
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

  if (points === 21) {
    dispatch(playersStands());
  }

  const handleHit = () => {
    if (deckId) {
      dispatch(addCards(1, deckId));
    }
  };

  const handleStand = () => {
    dispatch(playersStands());
  };

  return (
    <StyledPlayer>
      <PlayersActionsContainer>
        <PlayerButton onClick={handleStand}>Stand</PlayerButton>
        <PlayerButton hit onClick={handleHit}>
          Hit
        </PlayerButton>
      </PlayersActionsContainer>
      <Cards cards={cards} />
      <p>Points: {points}</p>
    </StyledPlayer>
  );
};
