import _ from 'lodash';
import {
  ADD_PLAYERS,
  ADD_CARDS,
  IPlayer,
  PlayersReducerActions,
} from 'Redux/actions/players/types';

export interface IPlayersState {
  list: IPlayer[];
  currentPlayerId: string | null;
}

const InitialState: IPlayersState = { list: [], currentPlayerId: null };

export const playersReducer = (
  state = InitialState,
  action: PlayersReducerActions
): IPlayersState => {
  switch (action.type) {
    case ADD_PLAYERS:
      return { list: action.payload, currentPlayerId: action.payload[0].id };
    case ADD_CARDS: {
      const playerWithNewCards = _.cloneDeep(state.list).find(
        (player) => player.id === state.currentPlayerId
      );
      if (playerWithNewCards) {
        const newCards = [...playerWithNewCards.cards, ...action.payload];
        console.log(newCards);
        return {
          ...state,
          list: state.list.map((player) =>
            player.id !== state.currentPlayerId
              ? player
              : { ...playerWithNewCards, cards: newCards }
          ),
        };
      }
      return state;
    }
    default:
      return state;
  }
};
