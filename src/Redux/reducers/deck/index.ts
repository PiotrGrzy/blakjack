import { NEW_DECK } from 'Redux/actions/deck/types';

export interface IDeckState {
  deckId: string | null;
  remaining: number;
  shuffled: boolean;
}

interface IAction {
  type: string;
  payload: {
    deck_id: string;
    remaining: number;
    shuffled: boolean;
  };
}

const InitialState: IDeckState = {
  deckId: null,
  remaining: 0,
  shuffled: false,
};

export const deckReducer = (
  state = InitialState,
  action: IAction
): IDeckState => {
  switch (action.type) {
    case NEW_DECK: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { deck_id, remaining, shuffled } = action.payload;
      return {
        deckId: deck_id,
        remaining,
        shuffled,
      };
    }

    default:
      return state;
  }
};
