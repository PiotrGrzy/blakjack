import {
  NEW_DECK,
  END_GAME,
  DeckReducerActions,
} from 'Redux/actions/deck/types';

export interface IDeckState {
  deckId: string | null;
  remaining: number;
  shuffled: boolean;
  gameOn: boolean;
}

const InitialState: IDeckState = {
  deckId: null,
  remaining: 0,
  shuffled: false,
  gameOn: true,
};

export const deckReducer = (
  state = InitialState,
  action: DeckReducerActions
): IDeckState => {
  switch (action.type) {
    case NEW_DECK: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { deck_id, remaining, shuffled } = action.payload;
      return {
        deckId: deck_id,
        remaining,
        shuffled,
        gameOn: true,
      };
    }
    case END_GAME:
      return {
        ...state,
        gameOn: false,
      };

    default:
      return state;
  }
};
