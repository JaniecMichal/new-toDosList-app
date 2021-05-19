import React, { useContext } from 'react';
import { Box, Button, Text } from 'theme-ui';
import FormField from 'components/molecules/FormField';
import SubHeader from 'components/atoms/SubHeader';
import { initialFormValues } from './initialValues';
import { TasksContext } from 'providers/TasksProvider';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formValues } from 'recoilElements/atoms';
import { charCountState } from 'recoilElements/selectors';

const AddTaskForm = () => {
  const { handleAddTask } = useContext(TasksContext);
  const [values, setValues] = useRecoilState(formValues);
  const { titleCounter, descriptionCounter } = useRecoilValue(charCountState);

  const handleInputChange = (e) => {
    if (e.target.value.length > 500 && e.target.name === 'taskDescription') {
      return;
    }
    if (e.target.value.length > 50 && e.target.name === 'taskTitle') {
      return;
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddTask(values);
    setValues(initialFormValues);
  };

  return (
    <Box
      as="form"
      onSubmit={handleOnSubmit}
      px={20}
      py={10}
      sx={{
        width: '50%',
      }}
    >
      <SubHeader>Add task</SubHeader>
      <FormField
        label="Task title"
        name="taskTitle"
        value={values.taskTitle}
        onChange={handleInputChange}
      />
      <Text as="p" mb={12}>
        Title character count: {titleCounter}/50
      </Text>
      <FormField
        label="Task description"
        name="taskDescription"
        asWhat="textarea"
        value={values.taskDescription}
        onChange={handleInputChange}
      />
      <Text as="p" mb={12}>
        Description character count: {descriptionCounter}/500
      </Text>
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
