export const ADD_PLAYERS = 'ADD_PLAYERS';
export const ADD_CARDS = 'ADD_CARDS';
export const ADD_CARDS_FAILURE = 'ADD_CARDS_FAILURE';
export const PLAYER_STANDS = 'PLAYER_STANDS';
export const PLAYER_WON = 'PLAYER_WON';
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';

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
  status: 'playing' | 'won' | 'lost' | 'passed';
  index: number;
}

export interface AddPlayersAction {
  type: typeof ADD_PLAYERS;
  payload: IPlayer[];
}
export interface AddCardsAction {
  type: typeof ADD_CARDS;
  payload: ICard[];
}
export interface PlayerStandsAction {
  type: typeof PLAYER_STANDS;
}

export interface PlayerWonAction {
  type: typeof PLAYER_WON;
}

export interface SetNextPlayerAction {
  type: typeof SET_NEXT_PLAYER;
  payload: number;
}

export type PlayersReducerActions =
  | AddCardsAction
  | AddCardsAction
  | PlayerStandsAction
  | SetNextPlayerAction;
