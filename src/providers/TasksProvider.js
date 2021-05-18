import React, { useState } from 'react';
import { useId } from 'react-id-generator';

export const TasksContext = React.createContext({
  tasks: [],
  handleAddTask: () => {},
});

const currentTasks = [
  { id: 1, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 2, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 3, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 4, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 5, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 6, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 7, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 8, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 9, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 10, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 11, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 12, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 13, title: 'Task1', description: 'Lorem ipsum......', done: false },
  { id: 14, title: 'Task1', description: 'Lorem ipsum......', done: false },
];

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(currentTasks);
  const [newId] = useId();
  console.log(tasks);

  const handleAddTask = (formValues) => {
    const newTask = {
      id: newId,
      title: formValues.taskTitle,
      description: formValues.taskDescription,
      done: false,
    };
    setTasks([newTask, ...tasks]);
  };

  /* const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
 */
  return (
    <TasksContext.Provider value={{ tasks, handleAddTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
