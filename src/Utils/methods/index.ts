import { v4 as uuidv4 } from 'uuid';
import { IPlayer } from 'Redux/reducers/players';

export const getCardValue = (cardValue: string): number | undefined => {
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
    default:
      return undefined;
  }
};

export const createPlayer = (): IPlayer => {
  return {
    id: uuidv4(),
    cards: [],
    points: 0,
    status: 'playing',
  };
};