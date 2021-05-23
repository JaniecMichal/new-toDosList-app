import ActionButton from 'components/molecules/ActionButton';
import React from 'react';
import { Flex } from '@theme-ui/components';
import Searching from 'components/molecules/Searching';

const ActionBar = () => {
  return (
    <Flex my={72} px={100}>
      <Searching />
      <ActionButton />
    </Flex>
  );
};

export default ActionBar;
