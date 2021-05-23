import { selector } from 'recoil';
import { formValues, hideDoneTasks, tasksState, queryState } from './atoms';

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(formValues);
    const titleCounter = text.length;
    return { titleCounter };
  },
});

export const filteredTasksListState = selector({
  key: 'filteredTasksListState',
  get: ({ get }) => {
    const filter = get(hideDoneTasks);
    const list = get(tasksState);

    if (filter === true) {
      return list.filter((item) => !item.completed);
    }
    return list;
  },
});

export const tasksStatsState = selector({
  key: 'tasksStatsState',
  get: ({ get }) => {
    const todoList = get(tasksState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((task) => task.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

export const selectedTasksByQuery = selector({
  key: 'selectedTasksByQuery',
  get: ({ get }) => {
    const query = get(queryState);
    const tasks = get(tasksState);

    if (!query || query.trim() === '') {
      return tasks;
    }
    return tasks.filter(({ title }) =>
      title.toUpperCase().includes(query.trim().toUpperCase())
    );
  },
});
