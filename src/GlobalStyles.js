import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * 
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body 
    {
        font-family: 'Geologica', sans-serif;
        font-weight: 400;
        background-color: #0d2a20;
        color: #f5f5dc;
    }
`;

export default GlobalStyles;
