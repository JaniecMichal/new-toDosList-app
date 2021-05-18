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
