import React, { useState } from 'react';
import { Box, Button, Text } from '@theme-ui/components';
import TaskForm from '../TaskForm';

const AddTask = () => {
  const [formActivate, setFormActivate] = useState(false);

  if (formActivate) {
    return <TaskForm deactiveForm={setFormActivate} />;
  }

  return (
    <Button
      onClick={() => setFormActivate(!formActivate)}
      sx={{
        width: '100%',
        height: '100%',
        bg: 'transparent',
        color: 'pastelGreen',
        border: `4px dashed`,
        borderColor: 'pastelGreen',
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
