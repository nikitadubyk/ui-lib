import styled, { css } from 'styled-components';

import { ButtonStyleProps } from './types';

export const Button = styled.button<ButtonStyleProps>`
  ${({ padding }) => css`
    background-color: blueviolet;
    align-items: center;
    border-radius: 16px;
    padding: ${padding};
    display: inline-flex;
    justify-content: center;
    color: white;
    cursor: pointer;
  `};
`;
