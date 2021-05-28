import React, { useState } from 'react';
import { Box, Grid } from 'theme-ui';
import ListItem from 'components/molecules/ListItem';
import AddTask from '../AddTask';
import TaskForm from '../TaskForm';

const TasksList = ({ tasks, storedTasks, setStoredTasks }) => {
  const [editedTaskid, setEditedTaskId] = useState(null);
  const toggleTaskEdit = (task) => {
    editedTaskid !== task ? setEditedTaskId(task) : setEditedTaskId(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Grid
        as="ul"
        columns={['1fr 1fr 1fr 1fr']}
        px={100}
        sx={{
          gridTemplateRows: ' repeat(auto-fill, 250px)',
          gridAutoRows: '250px',
          listStyleType: 'none',
          '@media screen and (max-width: 1250px)': {
            gridTemplateColumns: '1fr 1fr 1fr',
          },
          '@media screen and (max-width: 1000px)': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@media screen and (max-width: 800px)': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <Box
          as="li"
          sx={{ width: '100%', height: '250px' }}
          key="AddingTaskItem"
        >
          <AddTask
            storedTasks={storedTasks}
            setStoredTasks={setStoredTasks}
            disabled={!!editedTaskid ? true : false}
          />
        </Box>
        {tasks.map((task) => {
          const taskIndex = tasks.findIndex(({ id }) => id === task.id);
          if (editedTaskid === task.id) {
            return (
              <TaskForm
                key={taskIndex}
                deactiveForm={setEditedTaskId}
                editedTask={task}
                editedTaskIndex={taskIndex}
                setStoredTasks={setStoredTasks}
              />
            );
          }

          return (
            <ListItem
              key={taskIndex}
              task={task}
              index={taskIndex}
              toggleTaskEdit={toggleTaskEdit}
              setStoredTasks={setStoredTasks}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default TasksList;
