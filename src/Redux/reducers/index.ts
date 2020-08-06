import { combineReducers } from 'redux';
import { playersReducer } from 'Redux/reducers/players';
import { deckReducer } from 'Redux/reducers/deck';

export const rootReducer = combineReducers({
  players: playersReducer,
  deck: deckReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
