import { ADD_PLAYER } from 'Redux/actions/players/types';

type Card = {
  image: string;
  value: string;
  suit: string;
  code: string;
};

type Action = {
  type: string;
  payload: PLayer;
};

type PLayer = {
  id: string;
  cards: Card[];
  points: number;
};

type State = PLayer[];

const InitialState: State = [];

export const playersReducer = (state = InitialState, action: Action): State => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];

    default:
      return state;
  }
};
