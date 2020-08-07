import React, { useEffect } from 'react';

import styled from 'styled-components';

// type ResultsProps = {
//   vis: boolean;
// };

const ResultsContainer = styled.div`
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: orangered;
  color: #fff;
`;

export const Results: React.FC = () => {
  //   useEffect(() => {
  //     if (checkAllStatus(players.list, 'lost')) {
  //       setVisible(true);
  //     }
  //   }, [players]);

  return (
    <ResultsContainer>
      <div>Results DIV</div>
    </ResultsContainer>
  );
};
