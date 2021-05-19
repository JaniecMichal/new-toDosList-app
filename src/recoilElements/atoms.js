import { atom } from 'recoil';

export const formValues = atom({
  key: 'formValues',
  default: {
    taskTitle: '',
    taskDescription: '',
  },
});
