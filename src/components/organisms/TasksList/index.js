import React from 'react';
import { Box, Grid } from 'theme-ui';
import SubHeader from 'components/atoms/SubHeader';
import ListItem from 'components/molecules/ListItem';

const TasksList = ({ tasks }) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <SubHeader>Task to do</SubHeader>
      <Grid as="ul" columns={['1fr 1fr 1fr 1fr']}>
        {tasks.map((task) => (
          <ListItem key={task.id} taskTitle={task.title} isDone={task.done} />
        ))}
      </Grid>
    </Box>
  );
};

export default TasksList;
