import _ from 'lodash';
import {
  ADD_PLAYERS,
  ADD_CARDS,
  PLAYER_STANDS,
  PLAYER_WON,
  SET_NEXT_PLAYER,
} from 'Redux/actions/players/types';
import { countPlayersPoints } from 'Utils/methods';

const InitialState = { list: [], currentPlayerId: null };

export const playersReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return { list: action.payload, currentPlayerId: action.payload[0].id };
    case ADD_CARDS: {
      const playerWithNewCards = _.cloneDeep(state.list).find(
        (player) => player.id === state.currentPlayerId
      );
      if (playerWithNewCards) {
        const newCards = [...playerWithNewCards.cards, ...action.payload];
        const { points, status } = countPlayersPoints(newCards);
        return {
          ...state,
          list: state.list.map((player) =>
            player.id !== state.currentPlayerId
              ? player
              : { ...playerWithNewCards, cards: newCards, points, status }
          ),
        };
      }
      return state;
    }
    case PLAYER_STANDS: {
      return {
        ...state,
        list: state.list.map((player) =>
          player.id !== state.currentPlayerId
            ? player
            : { ...player, status: 'passed' }
        ),
      };
    }
    case PLAYER_WON: {
      return {
        ...state,
        list: state.list.map((player) =>
          player.id !== state.currentPlayerId
            ? player
            : { ...player, status: 'won' }
        ),
      };
    }
    case SET_NEXT_PLAYER: {
      return {
        ...state,
        currentPlayerId: state.list[action.payload].id,
      };
    }
    default:
      return state;
  }
};
