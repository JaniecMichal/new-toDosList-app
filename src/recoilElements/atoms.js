import { atom } from 'recoil';

export const formValues = atom({
  key: 'formValues',
  default: {
    taskTitle: '',
    taskDescription: '',
  },
});

const defaultTask = [
  { id: 1, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 2, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 3, title: 'Task1', description: 'Lorem ipsum......', done: false },
];

export const tasksState = atom({
  key: 'tasks',
  default: defaultTask,
});

export const hideDoneTasks = atom({
  key: 'hideDoneTasks',
  default: false,
});
