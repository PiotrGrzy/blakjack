import { Action, Dispatch } from 'redux';

import { drawCards } from 'Api/cardsApi';
import { createPlayer } from 'Utils/methods';
import {
  ADD_PLAYERS,
  ADD_CARDS,
  ADD_CARDS_FAILURE,
  AddPlayersAction,
} from './types';

export const addPlayers = (numOfPlayers: number): AddPlayersAction => {
  const players = [];
  for (let i = 0; i <= numOfPlayers; i += 1) {
    const newPlayer = createPlayer();
    players.push(newPlayer);
  }

  return { type: ADD_PLAYERS, payload: players };
};

export const addCards = (numOfCards: number, deckId: string) => async (
  dispatch: Dispatch<Action>
): Promise<any> => {
  try {
    const cards = await drawCards(numOfCards, deckId);
    console.log(cards);
    dispatch({ type: ADD_CARDS, payload: cards });
  } catch (err) {
    dispatch({ type: ADD_CARDS_FAILURE, payload: err });
  }
};
