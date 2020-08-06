import React from 'react';
import { ICard } from 'Redux/actions/players/types';
import styled from 'styled-components';
import { Card } from 'Components/Card';

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  cards: ICard[];
}

export const CardsContainer: React.FC<Props> = ({ cards }: Props) => {
  return (
    <Cards>
      {cards.map((card) => (
        <Card image={card.image} code={card.code} key={card.code} />
      ))}
      Players Cards
    </Cards>
  );
};
