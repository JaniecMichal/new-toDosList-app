import { selector } from 'recoil';
import { formValues } from './atoms';

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(formValues);

    return {
      titleCounter: text.taskTitle.length,
      descriptionCounter: text.taskDescription.length,
    };
  },
});
