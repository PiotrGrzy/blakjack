import { v4 as uuidv4 } from 'uuid';
import { IPlayer, ICard } from 'Redux/actions/players/types';

export const getCardValue = (cardValue: string): number => {
  switch (cardValue) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
      return parseInt(cardValue, 10);
    case 'JACK':
      return 2;
    case 'QUEEN':
      return 3;
    case 'KING':
      return 4;
    case 'ACE':
      return 11;
    default:
      return 0;
  }
};

export const countPlayersPoints = (
  cards: ICard[]
): { points: number; status: string } => {
  const playerPoints = cards.reduce(
    (totalPoints, card) => totalPoints + getCardValue(card.value),
    0
  );
  if (playerPoints > 21) return { points: playerPoints, status: 'lost' };
  if (playerPoints === 21) return { points: playerPoints, status: 'won' };
  return { points: playerPoints, status: 'playing' };
};

export const createPlayer = (i: number): IPlayer => {
  return {
    id: uuidv4(),
    cards: [],
    points: 0,
    status: 'playing',
    index: i,
  };
};
