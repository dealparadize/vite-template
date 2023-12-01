import { createGlobalStyle, css } from 'styled-components';

const lightStyle = css`
  --blackColor: #213547;
  --whiteColor: white;
  --primaryColor: #535bf2;
  --primaryLightColor: #747bff;
  --fontColor: #213547;
  --backgroundColor: white;
  --buttonFontColor: #ffffff;
  --buttonBackgroundColor: #1a1a1a;
`;

const darkStyle = css`
  --backgroundColor: #242424;
  --fontColor: #ffffff;
  --buttonFontColor: #ffffff;
`;

export const GlobalStyle = createGlobalStyle`
    :root, :root.light {
        // set style
        ${lightStyle}

        // sizing
        --xs-sizing: 8px;
        --s-sizing: 16px;
        --m-sizing: 24px;
        --l-sizing: 32px;
        --xl-sizing: 64px;
        --xxl-sizing: 120px;

        // font
        --font-size: 16px;
        --font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        // font styles
        font-family: var(--font-family);
        font-size: var(--font-size);
        line-height: 1.5;
        font-weight: 400;

        // colors
        color-scheme:  'light dark';
        color: var(--fontColor);
        background-color: var(--backgroundColor);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        min-width: 320px;
        min-height: 100vh;
        overflow-x: clip;
    }

    h1 {
        font-size: 3rem;
        line-height: 4rem;
    }

    a {
        font-weight: 500;
        color: var(--primaryColor);
        text-decoration: inherit;
    }
    a:hover {
        color: var(--primaryLightColor);
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        color: var(--buttonFontColor);
        background-color: var(--buttonBackgroundColor);
        cursor: pointer;
        transition: border-color 0.25s;
        margin-bottom: var(--xs-sizing);
    }
    button:hover {
        border-color: var(--primaryColor);
    }
    button:focus,
    button:focus-visible {
        outline: 6px auto var(--primaryLightColor);
    }


    /* automatic dark mode */
    /* ❗️ keep the rules in sync with the manual dark mode below! */
    @media (prefers-color-scheme: dark) {
        :root {
            // set style
            ${darkStyle}
        }
    }

    :root.dark {
        ${darkStyle}
    }
`;
