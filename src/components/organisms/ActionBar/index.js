import ActionButton from 'components/molecules/ActionButton';
import React from 'react';
import { Flex } from '@theme-ui/components';
import Searching from 'components/molecules/Searching';

const ActionBar = () => {
  return (
    <Flex
      my={72}
      px={100}
      sx={{
        '@media screen and (max-width: 700px)': {
          flexDirection: 'column',
          justifyContent: 'center',
        },
        '@media screen and (max-width: 500px)': {
          padding: '0 20px',
          margin: '18px 0',
        },
      }}
    >
      <Searching />
      <ActionButton />
    </Flex>
  );
};

export default ActionBar;
