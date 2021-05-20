import React, { useEffect } from 'react';
import { Box, Button, Text } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';
import FormField from 'components/molecules/FormField';
import SubHeader from 'components/atoms/SubHeader';
import { initialFormValues } from './initialValues';
import { formValues, tasksState } from 'recoilElements/atoms';
import { charCountState } from 'recoilElements/selectors';
import { replaceItemAtIndex } from 'assets/helpers/helpers';

const AddTaskForm = ({ taskToEdit, taskIndex }) => {
  const [values, setValues] = useRecoilState(formValues);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const { titleCounter, descriptionCounter } = useRecoilValue(charCountState);

  useEffect(() => {
    if (!!taskToEdit) {
      setValues({
        taskTitle: taskToEdit.title,
        taskDescription: taskToEdit.description,
      });
    }
    return;
  }, []);

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

  const submitEditedTask = (tasksValue) => {
    const newList = replaceItemAtIndex(tasks, taskIndex, {
      ...taskToEdit,
      title: tasksValue.taskTitle,
      description: tasksValue.taskDescription,
    });

    setTasks(newList);
  };

  const handleAddTask = (tasksValue) => {
    setTasks((oldTasks) => [
      {
        id: nanoid(),
        title: tasksValue.taskTitle,
        description: tasksValue.taskDescription,
        done: false,
      },
      ...oldTasks,
    ]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!!taskToEdit) {
      submitEditedTask(values);
    } else {
      handleAddTask(values);
    }
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
