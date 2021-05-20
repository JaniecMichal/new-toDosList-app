export const toAddNewTask = () => '/add-task';
export const toEditTask = ({ id } = { id: ':id' }) => `/edit-task/${id}`;
export const toTaskListView = () => '/tasksList';
export const toTaskDetails = ({ id } = { id: ':id' }) => `/task/${id}`;
