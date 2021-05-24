import React from 'react';
import { Flex, Text } from '@theme-ui/components';
import { ReactComponent as UnCompletedIcon } from 'assets/images/uncompleted.svg';
import { ReactComponent as CompletedIcon } from 'assets/images/completed.svg';
import { useRecoilState } from 'recoil';
import { hideDoneTasks } from 'recoilElements/atoms';

const ActionButton = () => {
  const [filter, setFilter] = useRecoilState(hideDoneTasks);

  return (
    <Flex
      sx={{
        marginLeft: '22px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bg: 'transparent',
        border: 'none',
        fontFamily: 'main',
        '&:hover': {
          cursor: 'pointer',
        },
        '@media screen and (max-width: 700px)': {
          marginTop: '12px',
        },
      }}
      as="button"
      onClick={() => setFilter(!filter)}
    >
      {filter ? <CompletedIcon /> : <UnCompletedIcon />}
      <Text ml={2}>{!filter ? 'Hide finished tasks' : 'Show all tasks'}</Text>
    </Flex>
  );
};

export default ActionButton;
