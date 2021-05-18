import React from 'react';
import { Box, NavLink } from '@theme-ui/components';
import { toAddNewTask, toTaskListView } from 'assets/helpers/routes';

const Navigation = () => {
  return (
    <Box as="nav">
      <NavLink href={toAddNewTask()}>Add new task</NavLink>
      <NavLink href={toTaskListView()}>Your task list</NavLink>
    </Box>
  );
};

export default Navigation;
