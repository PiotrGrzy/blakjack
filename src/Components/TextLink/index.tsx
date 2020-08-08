import React, { FC } from 'react';
import styled, { css, IStyledComponentWithTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  ${({ theme }: IStyledComponentWithTheme) => css`
    color: ${theme.colors.gold};
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
    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;

interface ILinkProps {
  to: string;
  children: React.ReactNode;
}

export const TextLink: FC<ILinkProps> = ({ to, children }: ILinkProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);
