export const NEW_DECK = 'NEW_DECK';
export const NEW_DECK_FAILURE = 'ADD_DECK_FAILURE';
export const END_GAME = 'END_GAME';

export interface NewDeckAction {
  type: typeof NEW_DECK;
  payload: {
    deck_id: string;
    remaining: number;
    shuffled: boolean;
  };
}
export interface EndGameAction {
  type: typeof END_GAME;
}

export type DeckReducerActions = NewDeckAction | EndGameAction;
