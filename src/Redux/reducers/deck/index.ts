import { NEW_DECK } from 'Redux/actions/deck/types';

type DeckState = {
  deckId: string | null;
  remaining: number;
  shuffled: boolean;
};

type Action = {
  type: string;
  payload: {
    deck_id: string;
    remaining: number;
    shuffled: boolean;
  };
};

const InitialState: DeckState = {
  deckId: null,
  remaining: 0,
  shuffled: false,
};

export const deckReducer = (
  state = InitialState,
  action: Action
): DeckState => {
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
