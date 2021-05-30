import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TasksList from 'components/organisms/TasksList';
import { selectedTasksByQuery } from 'recoilElements/selectors';
import { Spinner, Text } from '@theme-ui/components';
import { tasksState } from 'recoilElements/atoms';
import { useLocalStorageState } from 'hooks/useLocalStorage';
import { useAPI } from 'hooks/useAPI';

const TaskListView = () => {
  const [storedTasks, setStoredTasks] = useLocalStorageState('toDo-tasks', []);
  const setTasks = useSetRecoilState(tasksState);
  const searchingTasks = useRecoilValue(selectedTasksByQuery);
  const { sendGETRequest, response, loading, setLoading, error } = useAPI();
  const storedTasksQuantity = +storedTasks.length;

  useEffect(() => {
    setLoading(true);
    sendGETRequest();
  }, [setLoading]);

  useEffect(() => {
    if (!!response && storedTasksQuantity === 0) {
      setTasks(response);
    }
  }, [response, setTasks, storedTasksQuantity]);

  useEffect(() => {
    if (!!storedTasks) {
      setTasks(storedTasks);
    }
  }, [storedTasks, setTasks]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
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
  return <TasksList tasks={searchingTasks} setStoredTasks={setStoredTasks} />;
};

export default TaskListView;
