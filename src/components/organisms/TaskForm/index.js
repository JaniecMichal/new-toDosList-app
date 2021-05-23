import React from 'react';
import { Box, Button, Text, Textarea } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';
import { initialFormValues } from './initialFormValues';
import { formValues, tasksState } from 'recoilElements/atoms';
import { charCountState } from 'recoilElements/selectors';

const TaskForm = ({ deactiveForm }) => {
  const [values, setValues] = useRecoilState(formValues);
  const [, setTasks] = useRecoilState(tasksState);
  const { titleCounter } = useRecoilValue(charCountState);

  const handleInputChange = (e) => {
    if (e.target.value.length > 100) {
      return;
    }
    setValues(e.target.value);
  };

  const handleAddTask = (tasksValue) => {
    setTasks((oldTasks) => [
      {
        id: nanoid(),
        title: tasksValue,
        completed: false,
      },
      ...oldTasks,
    ]);
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
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `4px dashed`,
        borderColor: 'pastelGreen',
      }}
    >
      <Box>
        <Textarea
          placeholder="Write task details"
          value={values}
          onChange={handleInputChange}
          required
          sx={{
            height: '100px',
            resize: 'none',
            lineHeight: 1.25,
          }}
        />
        <Text as="p" mt={12}>
          Character counter: {titleCounter}/100
        </Text>
      </Box>
      <Button
        bg="transparent"
        color="white"
        onClick={() => deactiveForm(false)}
        sx={{
          width: '100%',
          fontFamily: 'main',
          padding: '8px 1px',
          border: '2px solid #61DB92',
          borderRadius: '20px',
          color: 'pastelGreen',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        Cancel adding task
      </Button>
      <Button
        bg="pastelGreen"
        color="white"
        sx={{
          width: '100%',
          fontFamily: 'main',
          borderRadius: '20px',
          padding: '8px 1px',
          border: '2px solid #61DB92',
          '&:hover': {
            cursor: 'pointer',
            bg: '#40BA70',
            borderColor: '#40BA70',
          },
        }}
      >
        Submit task
      </Button>
    </Box>
  );
};

export default TaskForm;
