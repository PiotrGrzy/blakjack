import React from 'react';
import styled from 'styled-components';

interface Props {
  image: string;
  code: string;
}

const StyledCard = styled.div`
  width: 15rem;
  height: 30rem;
  background-color: lightgreen;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Card: React.FC<Props> = ({ image, code }: Props) => {
  return (
    <StyledCard>
      <img src={image} alt={code} />
    </StyledCard>
  );
};
