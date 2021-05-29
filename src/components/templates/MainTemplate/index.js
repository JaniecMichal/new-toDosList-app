import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Box, Flex } from 'theme-ui';
import ActionBar from 'components/organisms/ActionBar';
import MainHeader from 'components/organisms/MainHeader';
import { currentUserState } from 'recoilElements/atoms';
import axios from 'axios';

const MainTemplate = ({ children }) => {
  const setUser = useSetRecoilState(currentUserState);
  const usersEndpoint = 'https://gorest.co.in/public-api/users';

  useEffect(() => {
    axios
      .get(usersEndpoint)
      .then(({ data }) => setUser(data.data[0]))
      .catch((error) => console.error(error));
  }, [setUser]);

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
