export const ADD_PLAYERS = 'ADD_PLAYERS';
export const ADD_CARDS = 'ADD_CARDS';
export const ADD_CARDS_FAILURE = 'ADD_CARDS_FAILURE';

export interface ICard {
  image: string;
  value: string;
  suit: string;
  code: string;
}

export interface IPlayer {
  id: string;
  cards: ICard[];
  points: number;
  status: 'playing' | 'won' | 'lost';
}

export interface AddPlayersAction {
  type: typeof ADD_PLAYERS;
  payload: IPlayer[];
}
export interface AddCardsAction {
  type: typeof ADD_CARDS;
  payload: ICard[];
}

export type PlayersReducerActions = AddCardsAction | AddCardsAction;
