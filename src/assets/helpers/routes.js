export const toAddNewTask = () => '/add-task';
export const toTaskListView = () => '/tasksList';
export const toTaskDetails = ({ id } = { id: ':id' }) => `/task/${id}`;
