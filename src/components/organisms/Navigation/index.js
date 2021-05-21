import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Text } from '@theme-ui/components';
import { toAddNewTask, toTaskListView } from 'assets/helpers/routes';

const Navigation = () => {
  const [currentPathname, setCurrentPathName] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPathName(pathname);
  }, [pathname]);

  return (
    <Box
      as="nav"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        a: {
          textDecoration: 'none',
          marginBottom: 12,
        },
      }}
    >
      <NavLink to={toAddNewTask()}>
        <Text
          variant="text.navLink"
          sx={
            currentPathname === toAddNewTask()
              ? {
                  color: 'teal',
                  fontWeight: '700',
                  textDecoration: 'underline',
                }
              : ''
          }
        >
          Add new task
        </Text>
      </NavLink>
      <NavLink to={toTaskListView()}>
        <Text
          variant="text.navLink"
          sx={
            currentPathname === toTaskListView()
              ? {
                  color: 'teal',
                  fontWeight: '700',
                  textDecoration: 'underline',
                }
              : ''
          }
        >
          Your task list
        </Text>
      </NavLink>
    </Box>
  );
};

export default Navigation;
