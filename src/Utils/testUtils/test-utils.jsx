/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'Styles/theme/defaultTheme';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from 'Redux/reducers';

const INITIAL_STATE = {
  players: { list: [], currentPlayerId: null, loading: false },
  deck: { deckId: null, remaining: 0, shuffled: false, gameOn: true },
};

function render(
  ui,
  {
    initialState = INITIAL_STATE,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
