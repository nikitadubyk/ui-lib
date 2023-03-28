import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${normalize};

    button {
        border: none;
        color: inherit;
        cursor: pointer;
        line-height: inherit;
        background-color: inherit;
    }
`;
