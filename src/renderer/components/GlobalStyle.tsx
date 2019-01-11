import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  font-family: sans-serif;

  :root {
    --color-white: #fff;
    --color-black: #222;

    --color-content-default-background: var(--color-white);
    --color-content-default-foreground: var(--color-black);

    --color-controls-default-background: var(--color-black);
    --color-controls-default-foreground: var(--color-white);
  }
`;
