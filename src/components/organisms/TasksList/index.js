import React from 'react';
import { Box, Grid, Button, Flex, Text } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import SubHeader from 'components/atoms/SubHeader';
import ListItem from 'components/molecules/ListItem';
import { hideDoneTasks } from 'recoilElements/atoms';
import { tasksStatsState } from 'recoilElements/selectors';

const TasksList = ({ tasks }) => {
  const [filter, setFilter] = useRecoilState(hideDoneTasks);
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(
    tasksStatsState
  );

  const updateFilter = () => {
    setFilter(!filter);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box>
        <SubHeader>Task to do:</SubHeader>
        <Flex>
          <Text mr={5} color="christi">
            Completed: {totalCompletedNum}
          </Text>
          <Text mr={5} color="crimson">
            Uncompleted: {totalUncompletedNum}
          </Text>
          <Text sx={{ fontWeight: '700' }}>Total: {totalNum}</Text>
        </Flex>
      </Box>
      <Box my={12}>
        <Button
          onClick={updateFilter}
          disabled={totalCompletedNum === 0 ? 'disabled' : ''}
          sx={{
            bg: 'teal',
            marginRight: 2,
            '&:hover': {
              cursor: 'pointer',
              bg: 'bombay',
            },
            '&:disabled': {
              cursor: 'default',
              bg: 'scoripion',
            },
          }}
        >
          {!filter ? 'Hide done tasks' : 'Show all tasks'}
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
