import React from 'react';
import { useParams } from 'react-router';
import TaskForm from 'components/organisms/TaskForm';
import { useRecoilValue } from 'recoil';
import { tasksState } from 'recoilElements/atoms';

const EditTaskView = () => {
  const { id } = useParams();
  const tasks = useRecoilValue(tasksState);
  const index = tasks.findIndex((task) => task.id === +id);
  const editedTask = tasks[index];

  return <TaskForm taskToEdit={editedTask} taskIndex={index} />;
};

export default EditTaskView;
