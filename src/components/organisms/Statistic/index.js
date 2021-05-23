import React from 'react';
import { Flex, Text } from '@theme-ui/components';
import { useRecoilValue } from 'recoil';
import { tasksStatsState } from 'recoilElements/selectors';

const Statistic = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(
    tasksStatsState
  );
  return (
    <Flex color="gray">
      <Text as="p" mr={10}>
        Completed:
        <Text ml={1} color="pastelGreen">
          {totalCompletedNum}
        </Text>
      </Text>
      <Text as="p" mr={10}>
        Uncompleted:
        <Text ml={1} color="crimson">
          {totalUncompletedNum}
        </Text>
      </Text>
      <Text as="p">
        Total:<Text ml={1}>{totalNum}</Text>
      </Text>
    </Flex>
  );
};

export default Statistic;
