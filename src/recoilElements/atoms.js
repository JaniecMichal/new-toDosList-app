import { atom } from 'recoil';

export const formValues = atom({
  key: 'formValues',
  default: '',
});

export const tasksState = atom({
  key: 'tasks',
  default: [],
});

export const hideDoneTasks = atom({
  key: 'hideDoneTasks',
  default: false,
});
