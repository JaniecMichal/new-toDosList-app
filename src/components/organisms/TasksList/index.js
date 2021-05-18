import React, { useContext } from 'react';
import { Box, Grid } from 'theme-ui';
import SubHeader from 'components/atoms/SubHeader';
import ListItem from 'components/molecules/ListItem';
import { TasksContext } from 'providers/TasksProvider';

const TasksList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <Box
      sx={{
        width: '75%',
        border: (theme) => `2px solid ${theme.colors.black}`,
      }}
    >
      <SubHeader>Task to do</SubHeader>
      <Grid as="ul" columns={['1fr 1fr']}>
        {tasks.map((task) => (
          <ListItem key={task.id} taskTitle={task.title} isDone={task.done} />
        ))}
      </Grid>
    </Box>
  );
};

export default TasksList;
