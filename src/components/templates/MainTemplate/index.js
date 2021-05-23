import React from 'react';
import { Box, Flex } from 'theme-ui';
import ActionBar from 'components/organisms/ActionBar';
import MainHeader from 'components/organisms/MainHeader';

const MainTemplate = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        width: '100vw',
      }}
    >
      <MainHeader />
      <ActionBar />
      <Flex p={10} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Flex>
    </Box>
  );
};

export default MainTemplate;
