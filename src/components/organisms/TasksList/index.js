import React from 'react';
import { Box, Grid } from 'theme-ui';
import SubHeader from 'components/atoms/SubHeader';
import ListItem from 'components/molecules/ListItem';

const tasks = [
  { id: 1, title: 'Task1', fullContent: 'Lorem ipsum......', done: false },
  { id: 2, title: 'Task1', fullContent: 'Lorem ipsum......', done: false },
  { id: 3, title: 'Task1', fullContent: 'Lorem ipsum......', done: false },
  { id: 4, title: 'Task1', fullContent: 'Lorem ipsum......', done: false },
];

const TasksList = () => {
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
          <ListItem key={task.id} taskTitle={task.title} />
        ))}
      </Grid>
    </Box>
  );
};

export default TasksList;
