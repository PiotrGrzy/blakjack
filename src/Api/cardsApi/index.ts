import { client } from '../axios';

interface NewDeckResponse {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

interface Card {
  image: string;
  value: string;
  suit: string;
  code: string;
}

interface DrawCardsResponse {
  success: boolean;
  cards: Card[];
  deck_id: string;
  remaining: number;
}

export const fetchNewDeck = async (): Promise<NewDeckResponse> => {
  try {
    const response = await client('/new/shuffle/?deck_count=6');

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const drawCards = async (
  numOfCards = 1,
  deckId: string
): Promise<DrawCardsResponse> => {
  try {
    const response = await client(`/${deckId}/draw/?count=${numOfCards}`);

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
