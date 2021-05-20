import React from 'react';
import { useRecoilValue } from 'recoil';
import TasksList from 'components/organisms/TasksList';
import { filteredTasksListState } from 'recoilElements/selectors';

const TaskListView = () => {
  const tasks = useRecoilValue(filteredTasksListState);

  return <TasksList tasks={tasks} />;
};

export default TaskListView;
