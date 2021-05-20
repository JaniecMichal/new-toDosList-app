import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { RecoilRoot } from 'recoil';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import TasksListView from './TasksListView.js';
import {
  toAddNewTask,
  toTaskListView,
  toEditTask,
  toTaskDetails,
} from 'assets/helpers/routes.js';
import Navigation from 'components/organisms/Navigation/index.js';
import EditTaskView from './EditTaskView.js';
import AddTaskView from './AddTaskView.js';
import TaskDetailsView from './TaskDetailsView.js';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <MainTemplate>
            <Navigation />
            <RecoilRoot>
              <Switch>
                <Route path={toTaskDetails()}>
                  <TaskDetailsView />
                </Route>
                <Route path={toEditTask()}>
                  <EditTaskView />
                </Route>
                <Route path={toAddNewTask()}>
                  <AddTaskView />
                </Route>
                <Route path={toTaskListView()}>
                  <TasksListView />
                </Route>
                <Route>
                  <Redirect to={toTaskListView()} />
                </Route>
              </Switch>
            </RecoilRoot>
          </MainTemplate>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
