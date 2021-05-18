import React, { useContext } from 'react';
import TasksList from 'components/organisms/TasksList';
import { TasksContext } from 'providers/TasksProvider';

const TaskListView = () => {
  const { tasks } = useContext(TasksContext);
  return <TasksList tasks={tasks} />;
};

export default TaskListView;
