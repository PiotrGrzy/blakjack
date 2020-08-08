import styled, { css, IStyledComponentWithTheme } from 'styled-components';

export const Heading = styled.h1`
  font-size: 6.8rem;
  font-weight: 300;
  text-align: center;
  margin: 3rem;
`;

export const SubHeading = styled.h2`
  font-size: 3.6rem;
  font-weight: 400;
  text-align: center;
  margin: 3rem;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

type ButtonProps = {
  current?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme }: IStyledComponentWithTheme) => css`
    cursor: pointer;
    color: ${(props: ButtonProps) =>
      props.current ? theme.colors.white : theme.colors.grey};
    display: inline-block;
    font-size: ${theme.fontSize.link};
    height: min-content;
    text-decoration: none;
    width: max-content;
    padding: 2rem;
    background-color: #101110;
    border-radius: 2rem;
    box-shadow: 0 5px 15px 15px rgba(0, 0, 0, 0.2);
    transition: color 0.2s;
    margin: 3rem 0;
    &:hover {
      color: ${theme.colors.gold};
    }
  `}
`;
