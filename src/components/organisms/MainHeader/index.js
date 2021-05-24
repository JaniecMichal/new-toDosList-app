import React from 'react';
import { Flex, Heading } from '@theme-ui/components';
import Statistic from '../Statistic';

const MainHeader = () => {
  return (
    <Flex
      as="header"
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '32px 64px',
        bg: 'white',
        position: 'sticky',
        top: 0,
        left: 0,
        '@media screen and (max-width: 700px)': {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      <Heading color="pastelGreen" as="h1">
        To-do Tasks
      </Heading>
      <Statistic />
    </Flex>
  );
};

export default MainHeader;
