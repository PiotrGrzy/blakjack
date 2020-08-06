import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IPlayer } from 'Redux/actions/players/types';
import { RootState } from 'Redux/reducers';

type ResultsProps = {
  vis: boolean;
};

const ResultsContainer = styled.div<ResultsProps>`
  display: ${(props) => (props.vis ? 'flex' : 'none')};
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: orangered;
  color: #fff;
`;

const checkAllStatus = (list: IPlayer[], status: string) => {
  return list.every((player) => player.status === status);
};

export const Results: React.FC = () => {
  const players = useSelector((state: RootState) => state.players);
  const [vis, setVisible] = useState(false);

  //   useEffect(() => {
  //     if (checkAllStatus(players.list, 'lost')) {
  //       setVisible(true);
  //     }
  //   }, [players]);

  return (
    <ResultsContainer vis={vis}>
      <div>Results DIV</div>
    </ResultsContainer>
  );
};
