import React from 'react';
import { useParams } from 'react-router';
import AddTaskForm from 'components/organisms/AddTaskForm';
import { useRecoilValue } from 'recoil';
import { tasksState } from 'recoilElements/atoms';

const EditTaskView = () => {
  const { id } = useParams();
  const tasks = useRecoilValue(tasksState);
  const index = tasks.findIndex((task) => task.id === +id);
  const editedTask = tasks[index];

  return <AddTaskForm taskToEdit={editedTask} taskIndex={index} />;
};

export default EditTaskView;
