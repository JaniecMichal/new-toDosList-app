import { atom } from 'recoil';

export const formValues = atom({
  key: 'formValues',
  default: '',
});

export const currentUserState = atom({
  key: 'user',
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

export const queryState = atom({
  key: 'queryState',
  default: '',
});
