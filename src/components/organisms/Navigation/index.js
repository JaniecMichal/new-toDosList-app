import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@theme-ui/components';
import { toAddNewTask, toTaskListView } from 'assets/helpers/routes';

const Navigation = () => {
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
        <Text variant="text.navLink">Add new task</Text>
      </NavLink>
      <NavLink to={toTaskListView()}>
        <Text variant="text.navLink">Your task list</Text>
      </NavLink>
    </Box>
  );
};

export default Navigation;
