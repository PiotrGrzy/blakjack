import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { css, IStyledComponentWithTheme } from 'styled-components';
import { RootState } from 'Redux/reducers';
import { Layout } from 'Components/Layout';
import { Container, SubHeading, Button } from 'Styles/components';
import { checkWinner } from 'Utils/methods';
import { resetPlayers } from 'Redux/actions/players';

const ResultsTable = styled.div`
  display: flex;
`;

const WinningPlayer = styled.div`
  ${({ theme }: IStyledComponentWithTheme) => css`
    display: inline-block;
    height: min-content;
    text-decoration: none;
    width: 18rem;
    padding: 2rem;
    background-color: #101110;
    border-radius: 2rem;
    border: 2px solid ${theme.colors.gold};
    margin: 3rem;
    h3 {
      color: ${theme.colors.gold};
      font-size: ${theme.fontSize.link};
    }
    p {
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.normal};
    }
  `}
`;

export const Results: React.FC = () => {
  const players = useSelector((state: RootState) => state.players.list);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNewGame = () => {
    dispatch(resetPlayers());
    history.push('/options');
  };

  const winningPlayers = checkWinner(players);

  return (
    <Layout>
      <Container>
        <SubHeading>THE RESULTS!!!</SubHeading>
        <SubHeading>
          {winningPlayers.length > 1 ? 'The winners are: ' : 'The winner is: '}
        </SubHeading>
        <ResultsTable>
          {winningPlayers.map((player) => {
            return (
              <WinningPlayer key={player.id}>
                <h3>Player {player.index + 1}</h3>
                <p>
                  {player.points > 0
                    ? `Points: ${player.points}`
                    : 'All other players over 21 points!'}
                </p>
              </WinningPlayer>
            );
          })}
        </ResultsTable>
        <Button onClick={handleNewGame}>Start New Game</Button>
      </Container>
    </Layout>
  );
};
