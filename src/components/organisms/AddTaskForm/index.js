import React, { useContext, useState } from 'react';
import { Box, Button } from 'theme-ui';
import FormField from 'components/molecules/FormField';
import SubHeader from 'components/atoms/SubHeader';
import { initialFormValues } from './initialValues';
import { TasksContext } from 'providers/TasksProvider';

const AddTaskForm = () => {
  const { handleAddTask } = useContext(TasksContext);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddTask(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <Box
      as="form"
      onSubmit={handleOnSubmit}
      px={20}
      py={10}
      sx={{
        width: '100%',
      }}
    >
      <SubHeader>Add task</SubHeader>
      <FormField
        label="Task title"
        name="taskTitle"
        value={formValues.taskTitle}
        onChange={handleInputChange}
      />
      <FormField
        label="Task description"
        name="taskDescription"
        asWhat="textarea"
        value={formValues.taskDescription}
        onChange={handleInputChange}
      />
      <Button
        bg="teal"
        color="white"
        px={30}
        py={20}
        sx={{
          width: '100%',
          fontFamily: 'main',
          '&:hover': {
            bg: 'transparent',
            padding: '18px 30px',
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
