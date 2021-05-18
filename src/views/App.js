import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import AddTaskForm from 'components/organisms/AddTaskForm';
import TasksListView from './TasksListView.js';
import TasksProvider from 'providers/TasksProvider';
import { toAddNewTask, toTaskListView } from 'assets/helpers/routes.js';
import Navigation from 'components/organisms/Navigation/index.js';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <MainTemplate>
            <Navigation />
            <TasksProvider>
              <Switch>
                <Route path={toAddNewTask()}>
                  <AddTaskForm />
                </Route>
                <Route path={toTaskListView()}>
                  <TasksListView />
                </Route>
                <Route>
                  <Redirect to={toTaskListView()} />
                </Route>
              </Switch>
            </TasksProvider>
          </MainTemplate>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
