import React from 'react';
import styled, { keyframes } from 'styled-components';
import backface from 'assets/backface.png';

interface Props {
  image: string;
  code: string;
}

const flip = keyframes`
     from {
     rotateY(0);
    }
    
    to {
      rotateY(180deg);
    }
  
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 15rem;
  height: 20rem;
  perspective: 1000px;
  margin-left: -8rem;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  animation: 3s ease-in 1s infinite ${flip};
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

export const Card: React.FC<Props> = ({ image, code }: Props) => {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront>
          <img src={image} alt={code} />
        </FlipCardFront>
        <FlipCardBack>
          <img src={backface} alt="cart backface" />
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};
