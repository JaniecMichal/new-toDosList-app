import { selector } from 'recoil';
import { formValues, hideDoneTasks, tasksState } from './atoms';

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

export const filteredTasksListState = selector({
  key: 'filteredTasksListState',
  get: ({ get }) => {
    const filter = get(hideDoneTasks);
    const list = get(tasksState);

    if (filter === true) {
      return list.filter((item) => !item.done);
    }
    return list;
  },
});
