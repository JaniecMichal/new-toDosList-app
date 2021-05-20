import React from 'react';
import { Box, Text } from '@theme-ui/components';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { tasksState } from 'recoilElements/atoms';
import SubHeader from 'components/atoms/SubHeader';

const TaskDetailsView = () => {
  const { id } = useParams();
  const tasks = useRecoilValue(tasksState);
  const index = tasks.findIndex((task) => task.id === +id);
  const detailedTask = tasks[index];

  return (
    <Box sx={{ width: '100%' }}>
      <SubHeader>Details of tasks: {detailedTask.title}</SubHeader>
      <Text as="p" mt={5}>
        Task description: {detailedTask.description}
      </Text>
      <Text as="p" mt={5}>
        Done:
        <Text ml={1} color={detailedTask.done ? 'christi' : 'crimson'}>
          {`${detailedTask.done}`}
        </Text>
      </Text>
    </Box>
  );
};

export default TaskDetailsView;
