import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { RecoilRoot } from 'recoil';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import TasksListView from './TasksListView.js';
import { toTaskListView, toTaskDetails } from 'assets/helpers/routes.js';
import TaskDetailsView from './TaskDetailsView.js';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <RecoilRoot>
            <MainTemplate>
              <Switch>
                <Route path={toTaskDetails()}>
                  <TaskDetailsView />
                </Route>
                <Route path={toTaskListView()}>
                  <TasksListView />
                </Route>
                <Route>
                  <Redirect to={toTaskListView()} />
                </Route>
              </Switch>
            </MainTemplate>
          </RecoilRoot>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
