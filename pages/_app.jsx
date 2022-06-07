import React from "react";

// /** @jsxImportSource theme-ui */
// /** @jsx jsx */
// /** @jsxRuntime classic */
// import { jsx } from "theme-ui";
// import { ThemeProvider }  from 'theme-ui';
// import { theme } from '../theme';
import Nav from '../src/components/nav';

// import '../src/styles.css';

// This file is necessary for *global* css styles to be included.
// Otherwise, css must be renamed to filename.module.css in the
// folder where they are used.

// Pre-processors can also be used by extending Next.js.

export default function App({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />  
      </div>
    // </ThemeProvider>
  );
}
