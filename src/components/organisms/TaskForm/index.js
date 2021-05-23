import React, { useEffect, useState } from 'react';
import { Box, Button, Text, Textarea } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { initialFormValues } from './initialFormValues';
import { formValues, tasksState } from 'recoilElements/atoms';
import { charCountState } from 'recoilElements/selectors';
import { replaceItemAtIndex } from 'assets/helpers/helpers';

const TaskForm = ({
  deactiveForm,
  editedTask,
  editedTaskIndex,
  setStoredTasks,
}) => {
  const [warningActive, setWarningActive] = useState(false);
  const [value, setValue] = useRecoilState(formValues);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const { titleCounter } = useRecoilValue(charCountState);

  useEffect(() => {
    if (!!editedTask) {
      return setValue(editedTask.title);
    }
    return setValue(initialFormValues);
  }, [editedTask, setValue]);

  const handleInputChange = (e) => {
    if (e.target.value.length > 100) {
      return;
    }
    setValue(e.target.value);
    setWarningActive(false);
  };

  const handleAddTask = (tasksValue) => {
    setTasks((oldTasks) => {
      const newList = [
        {
          id: Number(oldTasks.length + 1),
          title: tasksValue.trim(),
          completed: false,
        },
        ...oldTasks,
      ];
      setStoredTasks(newList);
      return newList;
    });
  };

  const handleEditTask = (newTaskValue) => {
    const newList = replaceItemAtIndex(tasks, editedTaskIndex, {
      ...editedTask,
      title: newTaskValue,
    });
    setStoredTasks(newList);
    setTasks(newList);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (+value.trim().length === 0) {
      setWarningActive(true);
      return;
    }
    if (!!editedTask) {
      handleEditTask(value);
      deactiveForm(null);
    } else {
      handleAddTask(value);
    }
    setValue(initialFormValues);
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
          value={value}
          onChange={handleInputChange}
          required
          sx={{
            height: '100px',
            resize: 'none',
            lineHeight: 1.25,
          }}
        />
        {warningActive && (
          <Text variant={'text.warning'}>
            You can't submit task only with white characetrs...
          </Text>
        )}
        <Text
          as="p"
          mt={10}
          mb={0}
          color={+titleCounter === 100 ? 'crimson' : ''}
        >
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
