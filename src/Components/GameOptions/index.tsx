import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getNewDeck } from 'Redux/actions/deck';
import { addPlayers } from 'Redux/actions/players';

type ButtonProps = {
  current?: boolean;
};

type SelectProps = {
  visible?: boolean;
};

const StyledDiv = styled.div`
  padding: 4rem;
`;

const StyledSelect = styled.select<SelectProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  padding: 1rem;
  font-size: 2rem;

  & option {
    color: green;
  }
`;

const StyledBtn = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 1rem;
  font-size: 2rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => (props.current ? 'green' : '#333')};
  color: #fff;
`;

export const GameOptions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [gameMode, setGameMode] = useState('single');
  const [numOfPlayers, setNumOfPlayers] = useState(1);

  const dispatch = useDispatch();

  const handleGameModeChange = (mode: 'single' | 'multi') => {
    setGameMode(mode);
  };

  const setGame = () => {
    dispatch(getNewDeck());
    dispatch(addPlayers(numOfPlayers));
  };

  const handleStart = () => {
    setGame();
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <StyledDiv>
      <h2>Pick up a game type:</h2>
      <StyledBtn
        current={gameMode === 'single'}
        onClick={() => handleGameModeChange('single')}
      >
        Single Player
      </StyledBtn>
      <StyledBtn
        current={gameMode === 'multi'}
        onClick={() => handleGameModeChange('multi')}
      >
        Multiplayer
      </StyledBtn>
      <StyledSelect
        visible={gameMode === 'multi' && true}
        name="playersNum"
        onChange={(e) => setNumOfPlayers(parseInt(e.target.value, 10))}
      >
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
      </StyledSelect>
      <h3>Start the game</h3>
      <StyledBtn onClick={handleStart}>Start</StyledBtn>
    </StyledDiv>
  );
};
