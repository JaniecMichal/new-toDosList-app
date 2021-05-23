import React from 'react';
import { Box, Text, Flex, Heading } from '@theme-ui/components';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { tasksState } from 'recoilElements/atoms';
import SubHeader from 'components/atoms/SubHeader';
import { Link } from 'react-router-dom';
import { toTaskListView } from 'assets/helpers/routes';

const TaskDetailsView = () => {
  const { id } = useParams();
  const tasks = useRecoilValue(tasksState);
  const index = tasks.findIndex((task) => task.id === +id);
  const detailedTask = tasks[index];

  if (!tasks.length) {
    return (
      <Box
        sx={{
          width: '100%',
          padding: '30px',
          fontWeight: '700',
          color: 'crimson',
          a: {
            textDecoration: 'none',
            color: 'pastelGreen',

            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Heading mb={10}>
          Something went wrong... please back to homepage
        </Heading>
        <Link to={toTaskListView()}>Back to tasks list</Link>
      </Box>
    );
  }
  return (
    <Box sx={{ width: '100%' }} bg="milkPunch" p={30}>
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 10,
          borderBottom: '2px solid #222',
          marginBottom: 12,

          a: {
            textDecoration: 'none',
            color: 'pastelGreen',
            fontWeight: '700',

            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        <SubHeader>Details of task</SubHeader>
        <Link to={toTaskListView()}>Back to tasks list</Link>
      </Flex>
      <Text as="p" mt={5}>
        Task description:
        <Text ml={1} sx={{ fontWeight: '700' }}>
          {detailedTask.title}
        </Text>
      </Text>
      <Text as="p" mt={5}>
        Status:
        <Text
          ml={1}
          color={detailedTask.completed ? 'pastelGreen' : 'crimson'}
          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
        >
          {detailedTask.completed ? 'completed' : 'uncompleted'}
        </Text>
      </Text>
    </Box>
  );
};

export default TaskDetailsView;
