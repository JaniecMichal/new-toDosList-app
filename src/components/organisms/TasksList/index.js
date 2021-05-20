import React from 'react';
import { Box, Grid, Button } from 'theme-ui';
import { useRecoilState } from 'recoil';
import SubHeader from 'components/atoms/SubHeader';
import ListItem from 'components/molecules/ListItem';
import { hideDoneTasks } from 'recoilElements/atoms';

const TasksList = ({ tasks }) => {
  const [filter, setFilter] = useRecoilState(hideDoneTasks);

  const updateFilter = () => {
    setFilter(!filter);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <SubHeader>Task to do</SubHeader>
      <Box my={12}>
        <Button
          onClick={updateFilter}
          sx={{
            bg: 'teal',
            marginRight: 2,
            '&:hover': {
              cursor: 'pointer',
              bg: 'bombay',
            },
          }}
        >
          {filter ? 'Hide done tasks' : 'Show all tasks'}
        </Button>
      </Box>
      <Grid as="ul" columns={['1fr 1fr 1fr 1fr']}>
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </Grid>
    </Box>
  );
};

export default TasksList;
