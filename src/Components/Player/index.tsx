import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addCards } from 'Redux/actions/players';
import { RootState } from 'Redux/reducers';
import { Card } from 'Components/Card';
import { IPlayer } from 'Redux/actions/players/types';

const StyledPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  player: IPlayer;
}

export const Player: React.FC<Props> = ({ player }: Props) => {
  const { cards } = player;
  const deckId = useSelector((state: RootState) => state.deck.deckId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cards.length === 0 && deckId) {
      dispatch(addCards(2, deckId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckId]);

  return (
    <StyledPlayer>
      <CardsContainer>
        {cards.map((card) => (
          <Card image={card.image} code={card.code} />
        ))}
        Players Cards
      </CardsContainer>
    </StyledPlayer>
  );
};
