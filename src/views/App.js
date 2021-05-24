import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { RecoilRoot } from 'recoil';
import { theme } from 'assets/theme/theme.js';
import MainTemplate from 'components/templates/MainTemplate';
import TasksListView from './TasksListView.js';
import { toTaskListView, toTaskDetails } from 'assets/helpers/routes.js';
import TaskDetailsView from './TaskDetailsView.js';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
