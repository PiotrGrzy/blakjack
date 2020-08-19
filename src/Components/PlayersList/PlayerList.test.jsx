import React from 'react';
import { render, screen } from 'Utils/testUtils/test-utils';
import { playerMock } from 'Components/Player/playerMock';
import { PlayersList } from '.';

const customStore = {
  players: {
    list: [playerMock],
    currentPlayerId: playerMock.id,
    loading: false,
  },
  deck: { deckId: null, remaining: 0, shuffled: false, gameOn: true },
};

describe('PlayersList', () => {
  it('renders properly with default store', async () => {
    render(<PlayersList />);

    expect(screen.queryAllByTestId('player-list-element')).toHaveLength(0);
  });

  it('renders players from changed store', async () => {
    render(<PlayersList />, {
      initialState: customStore,
    });

    expect(screen.getAllByTestId('player-list-element')).toHaveLength(1);
  });
});
