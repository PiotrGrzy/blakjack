import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, IStyledComponentWithTheme } from 'styled-components';
import { RootState } from 'Redux/reducers';
import { getNewDeck } from 'Redux/actions/deck';
import { addPlayers } from 'Redux/actions/players';
import { SubHeading, Container, Button } from 'Styles/components';
import { useHistory } from 'react-router-dom';
import { Layout } from 'Components/Layout';

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const StyledSelect = styled.select`
  ${({ theme }: IStyledComponentWithTheme) => css`
    display: block;
    font-size: ${theme.fontSize.link};
    height: min-content;
    width: max-content;
    padding: 2rem;
    background-color: #101110;
    border-radius: 2rem;
    box-shadow: 0 5px 15px 15px rgba(0, 0, 0, 0.2);
    transition: color 0.2s;
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.gold};
    }
  `}
`;

export const Options: React.FC = () => {
  const deckId = useSelector((state: RootState) => state.deck.deckId);
  const [gameMode, setGameMode] = useState('single');
  const [numOfPlayers, setNumOfPlayers] = useState(2);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleGameModeChange = (mode: 'single' | 'multi') => {
    setGameMode(mode);
  };

  const setGame = () => {
    if (deckId == null) {
      dispatch(getNewDeck());
    }

    dispatch(addPlayers(numOfPlayers));
    history.push('/game');
  };

  return (
    <Layout>
      <Container>
        <SubHeading>Pick up your game mode: </SubHeading>
        <ButtonsContainer>
          <Button
            current={gameMode === 'single'}
            onClick={() => handleGameModeChange('single')}
          >
            Single Player
          </Button>
          <Button
            current={gameMode === 'multi'}
            onClick={() => handleGameModeChange('multi')}
          >
            Multiplayer
          </Button>
        </ButtonsContainer>
        <StyledSelect
          disabled={gameMode !== 'multi'}
          name="playersNum"
          onChange={(e) => setNumOfPlayers(parseInt(e.target.value, 10))}
        >
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
        </StyledSelect>
        <Button onClick={setGame} current>
          Start the Game
        </Button>
      </Container>
    </Layout>
  );
};
