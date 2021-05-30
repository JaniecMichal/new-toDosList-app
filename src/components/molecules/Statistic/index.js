import React from 'react';
import { Flex, Text } from '@theme-ui/components';
import { useRecoilValue } from 'recoil';
import { tasksStatsState } from 'recoilElements/selectors';

const Statistic = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(
    tasksStatsState
  );
  return (
    <Flex
      color="gray"
      sx={{
        '@media screen and (max-width: 700px)': {
          marginTop: '12px',
        },
        '@media screen and (max-width: 320px)': {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
      }}
    >
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
