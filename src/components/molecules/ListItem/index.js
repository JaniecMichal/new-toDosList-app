import React from 'react';
import { Box, Heading } from '@theme-ui/components';
import { Link } from 'react-router-dom';
import { hideDoneTasks, tasksState } from 'recoilElements/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { toTaskDetails } from 'assets/helpers/routes';
import { removeItemAtIndex, replaceItemAtIndex } from 'assets/helpers/helpers';
import TaskActionButton from '../TaskActionButton';
import { ReactComponent as UnCompletedIcon } from 'assets/images/uncompleted.svg';
import { ReactComponent as CompletedIcon } from 'assets/images/completed.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/remove.svg';
import { ReactComponent as EditIcon } from 'assets/images/edit.svg';

const ListItem = ({ task, index, toggleTaskEdit, setStoredTasks }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const filter = useRecoilValue(hideDoneTasks);

  const toggleDone = () => {
    const newList = replaceItemAtIndex(tasks, index, {
      ...task,
      completed: !task.completed,
    });
    setStoredTasks(newList);
    setTasks(newList);
  };

  const removeTask = () => {
    const newList = removeItemAtIndex(tasks, index);
    setStoredTasks(newList);
    setTasks(newList);
  };

  return (
    <Box
      as="li"
      sx={{
        display: `${filter && task.completed ? 'none' : 'flex'}`,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        bg: `${task.completed ? 'silver' : 'milkPunch'}`,
        padding: '18px',
        a: {
          color: `black`,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            fontWeight: '700',
          },
        },
      }}
      mb={14}
    >
      <Heading
        as="h3"
        sx={{
          wordBreak: 'break-all',
          whiteSpace: 'pre-wrap',
          color: 'scoripion',
        }}
      >
        {task.title}
      </Heading>
      <Link to={toTaskDetails({ id: task.id })}>Check details</Link>
      <Box
        sx={{
          width: '100px',
          height: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '2px 2px',
          alignItems: 'center',
          alignSelf: 'flex-end',
        }}
      >
        <TaskActionButton onClickFunction={toggleDone}>
          {!task.completed ? <UnCompletedIcon /> : <CompletedIcon />}
        </TaskActionButton>
        <TaskActionButton onClickFunction={removeTask}>
          <RemoveIcon />
        </TaskActionButton>
        <TaskActionButton
          onClickFunction={() => {
            toggleTaskEdit(task.id);
          }}
        >
          <EditIcon />
        </TaskActionButton>
      </Box>
    </Box>
  );
};

export default ListItem;
