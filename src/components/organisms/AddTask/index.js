import React, { useState } from 'react';
import { Box, Button, Text } from '@theme-ui/components';
import TaskForm from '../TaskForm';

const AddTask = ({ setStoredTasks, disabled }) => {
  const [formActivate, setFormActivate] = useState(false);

  if (formActivate) {
    return (
      <TaskForm
        deactiveForm={setFormActivate}
        setStoredTasks={setStoredTasks}
      />
    );
  }

  return (
    <Button
      onClick={() => setFormActivate(!formActivate)}
      disabled={disabled}
      sx={{
        width: '100%',
        height: '100%',
        bg: 'transparent',
        color: `${disabled ? 'gray' : 'pastelGreen'}`,
        border: `4px dashed`,
        borderColor: `${disabled ? 'gray' : 'pastelGreen'}`,
        fontWeight: '700',
        fontSize: 24,
        '&:hover': {
          cursor: 'pointer',
          filter: 'brigthness(1.2)',
        },
      }}
    >
      <Box>+</Box>
      <Text as="p">Add new task</Text>
    </Button>
  );
};

export default AddTask;
