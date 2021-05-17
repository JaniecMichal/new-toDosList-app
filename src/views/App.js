import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { Box } from 'theme-ui';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import AddTaskForm from 'components/organisms/AddTaskForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <MainTemplate>
          <AddTaskForm />
          <Box p={4} bg="teal">
            Hello World!
          </Box>
        </MainTemplate>
      </>
    </ThemeProvider>
  );
}

export default App;
