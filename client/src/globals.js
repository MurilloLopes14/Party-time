import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --font: "Chivo Mono", sans-serif;
    --bg: #333;
    --color1: #64148D;
    --LinkColor: #114797; 
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font);
}

body{
    min-height: 100vh;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    transition: ease-in-out .2s;
}

h1, h2, h3, h4{
    color: ${({ theme }) => theme.text}
}

p, span{
    color: ${({ theme }) => theme.subText}
}

a{
    text-decoration: none;
    color: var(--LinkColor);
}

ul, ol, li{
    list-style: none;
    display: flex;
    gap: 1rem
}

input, textarea{
    outline: none;
}

.btn, .btn_secondary{
    display: flex;
    background-color: var(--color1);
    color: ${({ theme }) => theme.subText};
    padding: .5rem 1rem;
    justify-content: center;
    border-radius: 8px;
    transition: all .4s;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    &.btn_secondary{
        border: ${({ theme }) => theme.border};
        background-color: var(--LinkColor);
    }
}

`;

export default GlobalStyle;
