import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import TasksList from 'components/organisms/TasksList';
import { filteredTasksListState } from 'recoilElements/selectors';
import { useApiData } from 'apiData/useApiData';
import { Spinner, Text } from '@theme-ui/components';
import { tasksState } from 'recoilElements/atoms';

const TaskListView = () => {
  const setTasks = useSetRecoilState(tasksState);
  const filtredTasks = useRecoilValue(filteredTasksListState);
  const appState = useApiData();
  console.log(appState);

  useEffect(() => {
    if (appState.state === 'sucess') {
      setTasks(appState.tasks);
    }
  }, [appState.state]);

  if (appState.state === 'loading') {
    return <Spinner />;
  }

  if (appState.state === 'error') {
    return (
      <Text
        sx={{
          color: 'crimson',
          fontWeight: '700',
        }}
      >
        Ups...something went wrong... Please check your network or contact with
        support mail@example.com 😥
      </Text>
    );
  }
  return <TasksList tasks={filtredTasks} />;
};

export default TaskListView;
