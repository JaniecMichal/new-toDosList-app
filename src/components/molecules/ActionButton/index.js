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
      }}
      as="button"
      onClick={() => setFilter(!filter)}
    >
      <Text mr={2}>{!filter ? 'Show finished tasks' : 'Show all tasks'}</Text>
      {!filter ? <CompletedIcon /> : <UnCompletedIcon />}
    </Flex>
  );
};

export default ActionButton;
