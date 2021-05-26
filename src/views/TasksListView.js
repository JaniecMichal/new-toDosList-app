import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import TasksList from 'components/organisms/TasksList';
import { selectedTasksByQuery } from 'recoilElements/selectors';
import { useApiData } from 'hooks/useApiData';
import { Spinner, Text } from '@theme-ui/components';
import { queryState, tasksState } from 'recoilElements/atoms';
import { useLocalStorageState } from 'hooks/useLocalStorage';

const TaskListView = () => {
  const [storedTasks, setStoredTasks] = useLocalStorageState('toDo-tasks', []);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const query = useRecoilValue(queryState);
  const searchingTasks = useRecoilValue(selectedTasksByQuery);
  const appState = useApiData();
  const storedTasksQuantity = +storedTasks.length;

  useEffect(() => {
    if (!!query) {
      return setTasks(searchingTasks);
    }
    return setTasks(tasks);
  }, [query, setTasks]);

  useEffect(() => {
    if (!!storedTasks) {
      setTasks(storedTasks);
    }
  }, [storedTasks, setTasks]);

  useEffect(() => {
    if (appState.state === 'sucess' && storedTasksQuantity === 0) {
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
  return <TasksList tasks={tasks} setStoredTasks={setStoredTasks} />;
};

export default TaskListView;
