import React from 'react';
import { ICard } from 'Redux/actions/players/types';
import styled from 'styled-components';
import { Card } from 'Components/Card';

const Container = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  margin-left: 8rem;
`;

interface Props {
  cards: ICard[];
}

export const Cards: React.FC<Props> = ({ cards }: Props) => {
  return (
    <Container>
      {cards.map((card) => (
        <Card image={card.image} code={card.code} key={card.id} />
      ))}
    </Container>
  );
};
