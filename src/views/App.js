import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles.js';
import { theme } from 'assets/theme/theme.js';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
        <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
         <h1>Hello World!</h1>
        </>
      </ThemeProvider>
  );
}

export default App;
