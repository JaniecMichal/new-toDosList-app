import React from 'react';
import { Box, Heading, Button } from 'theme-ui';
import FormField from 'components/molecules/FormField';

const AddTaskForm = () => {
  return (
    <Box
      as="form"
      px={20}
      py={10}
      sx={{
        width: '100%',
      }}
    >
      <Heading as="h2" variant="headings.secondary">
        Add task
      </Heading>
      <FormField label="Task title" name="taskTitle" />
      <FormField
        label="Task description"
        name="taskDescription"
        asWhat="textarea"
      />
      <Button
        bg="teal"
        color="white"
        px={30}
        py={20}
        sx={{
          width: '100%',
          '&:hover': {
            bg: 'transparent',
            border: '2px solid teal',
            color: 'black',
            cursor: 'pointer',
          },
        }}
      >
        Submit task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
