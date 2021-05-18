import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import AddTaskForm from 'components/organisms/AddTaskForm';
import TasksList from 'components/organisms/TasksList';
import TasksProvider from 'providers/TasksProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <MainTemplate>
          <TasksProvider>
            <AddTaskForm />
            <TasksList />
          </TasksProvider>
        </MainTemplate>
      </>
    </ThemeProvider>
  );
}

export default App;
