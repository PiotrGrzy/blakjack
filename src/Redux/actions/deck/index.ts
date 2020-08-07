import { Action, Dispatch } from 'redux';
import { fetchNewDeck } from 'Api/cardsApi';

import { NEW_DECK, NEW_DECK_FAILURE, END_GAME, EndGameAction } from './types';

export const getNewDeck = () => async (
  dispatch: Dispatch<Action>
): Promise<any> => {
  try {
    const newDeck = await fetchNewDeck();
    console.log(newDeck);
    dispatch({ type: NEW_DECK, payload: newDeck });
  } catch (err) {
    dispatch({ type: NEW_DECK_FAILURE, payload: err });
  }
};

export const endGame = (): EndGameAction => {
  return { type: END_GAME };
};
