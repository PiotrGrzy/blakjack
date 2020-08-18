import {
  getCardValue,
  countPlayersPoints,
  checkWinner,
  CheckIfLastPlaying,
} from 'Utils/methods';
import {
  cardsUnder21,
  cardsOver21,
  cardsEqual21,
  mockedPlayers,
  mockedPlayers2,
} from './playersCardsMock';

describe('getCardValue function', () => {
  it('returns the right card value', () => {
    const result = getCardValue('JACK');
    expect(result).toEqual(2);
  });
});

describe('countPlayersPoints function', () => {
  it('returns the right sum of cards and player status', () => {
    const result = countPlayersPoints(cardsUnder21);
    const result2 = countPlayersPoints(cardsOver21);
    const result3 = countPlayersPoints(cardsEqual21);

    expect(result).toEqual({ points: 18, status: 'playing' });
    expect(result2).toEqual({ points: 22, status: 'lost' });
    expect(result3).toEqual({ points: 21, status: 'won' });
  });
});

describe('checkWinner function', () => {
  it('it returns player(s) with max points < 22 ', () => {
    const result = checkWinner(mockedPlayers);

    expect(result).toEqual([mockedPlayers[2]]);
  });
});

describe('CheckIfLastPlaying function', () => {
  it('returns correct answer', () => {
    const result = CheckIfLastPlaying(mockedPlayers);
    const result2 = CheckIfLastPlaying(mockedPlayers2);

    expect(result).toEqual(false);
    expect(result2).toEqual(true);
  });
});
