import React from 'react';
import { Button } from '@theme-ui/components';

const TaskActionButton = ({ children, onClickFunction }) => {
  return (
    <Button
      onClick={onClickFunction}
      bg="transparent"
      p={0}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default TaskActionButton;
