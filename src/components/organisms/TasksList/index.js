import React from 'react';
import { Box, Grid } from 'theme-ui';
import ListItem from 'components/molecules/ListItem';
import AddTask from '../AddTask';

const TasksList = ({ tasks }) => {
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
        <Box as="li" sx={{ width: '100%', height: '250px' }}>
          <AddTask />
        </Box>
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </Grid>
    </Box>
  );
};

export default TasksList;
