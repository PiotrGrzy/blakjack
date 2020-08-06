import { Action, Dispatch } from 'redux';

import { drawCards } from 'Api/cardsApi';
import { createPlayer } from 'Utils/methods';
import {
  ADD_PLAYERS,
  ADD_CARDS,
  ADD_CARDS_FAILURE,
  AddPlayersAction,
  PLAYER_STANDS,
  PlayerStandsAction,
  PLAYER_WON,
  SetNextPlayerAction,
  SET_NEXT_PLAYER,
} from './types';

export const addPlayers = (numOfPlayers: number): AddPlayersAction => {
  const players = [];
  for (let i = 0; i < numOfPlayers; i += 1) {
    const newPlayer = createPlayer(i);
    players.push(newPlayer);
  }

  return { type: ADD_PLAYERS, payload: players };
};

export const addCards = (numOfCards: number, deckId: string) => async (
  dispatch: Dispatch<Action>
): Promise<any> => {
  try {
    const cards = await drawCards(numOfCards, deckId);
    if (numOfCards === 2 && cards.cards.every((card) => card.value === 'ACE')) {
      dispatch({ type: PLAYER_WON });
    }
    dispatch({ type: ADD_CARDS, payload: cards });
  } catch (err) {
    dispatch({ type: ADD_CARDS_FAILURE, payload: err });
  }
};

export const playersStands = (): PlayerStandsAction => {
  return { type: PLAYER_STANDS };
};

export const setNextPlayer = (index: number): SetNextPlayerAction => {
  return { type: SET_NEXT_PLAYER, payload: index };
};
