export const NEW_DECK = 'NEW_DECK';
export const NEW_DECK_FAILURE = 'ADD_DECK_FAILURE';

export interface NewDeckAction {
  type: typeof NEW_DECK;
  payload: {
    deck_id: string;
    remaining: number;
    shuffled: boolean;
  };
}

export interface DeckFailureAction {
  type: typeof NEW_DECK_FAILURE;
}

export type DeckReducerActions = NewDeckAction;
