import _ from 'lodash';
import {
  ADD_PLAYERS,
  ADD_CARDS,
  PLAYER_STANDS,
  PLAYER_WON,
  SET_NEXT_PLAYER,
  SET_LOADING,
  RESET_PLAYERS,
} from 'Redux/actions/players/types';
import { countPlayersPoints } from 'Utils/methods';

const InitialState = { list: [], currentPlayerId: null, loading: false };

export const playersReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        list: action.payload,
        currentPlayerId: action.payload[0].id,
      };
    case ADD_CARDS: {
      const playerWithNewCards = _.cloneDeep(state.list).find(
        (player) => player.id === state.currentPlayerId
      );
      if (playerWithNewCards) {
        const newCards = [...playerWithNewCards.cards, ...action.payload];
        const { points, status } = countPlayersPoints(newCards);
        return {
          ...state,
          loading: false,
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
            ? { ...player, status: 'lost' }
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
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESET_PLAYERS: {
      return InitialState;
    }
    default:
      return state;
  }
};
