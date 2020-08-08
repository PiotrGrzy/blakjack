import { Action, Dispatch } from 'redux';
import { fetchNewDeck } from 'Api/cardsApi';

import { NEW_DECK, NEW_DECK_FAILURE } from './types';

export const getNewDeck = () => async (
  dispatch: Dispatch<Action>
): Promise<any> => {
  try {
    const newDeck = await fetchNewDeck();

    dispatch({ type: NEW_DECK, payload: newDeck });
  } catch (err) {
    dispatch({ type: NEW_DECK_FAILURE, payload: err });
  }
};
