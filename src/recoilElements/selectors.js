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

export const tasksStatsState = selector({
  key: 'tasksStatsState',
  get: ({ get }) => {
    const todoList = get(tasksState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((task) => task.done).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
