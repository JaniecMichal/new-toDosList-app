import React, { useEffect, useState } from 'react';
import { Box, Button, Text, Textarea, Spinner } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { initialFormValues } from './initialFormValues';
import { currentUserState, formValues, tasksState } from 'recoilElements/atoms';
import { charCountState } from 'recoilElements/selectors';
import { replaceItemAtIndex } from 'assets/helpers/helpers';
import { useAPI } from 'hooks/useAPI';
import useModal from 'components/organisms/Modal/useModal';

const TaskForm = ({
  deactiveForm,
  editedTask,
  editedTaskIndex,
  setStoredTasks,
}) => {
  const currentUser = useRecoilValue(currentUserState);
  const [isWarningActive, setWarningActive] = useState(false);
  const [value, setValue] = useRecoilState(formValues);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const { titleCounter } = useRecoilValue(charCountState);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { sendRequest, loading, setLoading } = useAPI();
  const [responseStatus, setResponseStatus] = useState(null);

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

  const handleSendTask = (tasksValue) => {
    const newTaskToSend = {
      user_id: currentUser.id,
      title: tasksValue.trim(),
      completed: false,
    };

    setLoading(true);
    sendRequest(JSON.stringify(newTaskToSend), 'POST')
      .then(({ data }) => {
        setLoading(false);
        setResponseStatus(data.code);
        handleAddTaskToList(data.data);
        handleOpenModal();
      })
      .catch((error) => console.error(error));
  };

  const handleAddTaskToList = (taskToAdd) => {
    setTasks((oldTasks) => {
      const newList = [taskToAdd, ...oldTasks];
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
      handleSendTask(value);
    }
    setValue(initialFormValues);
  };

  if (loading) {
    return <Spinner />;
  }

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
        {isWarningActive && (
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
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          {responseStatus === 201
            ? 'Your new task has been added correctly'
            : 'Your task has not been sendend to database. Task added locally only'}
        </Modal>
      ) : null}
    </Box>
  );
};

export default TaskForm;
