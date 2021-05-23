import React from 'react';
import { Box, Flex, Heading } from '@theme-ui/components';
import { Link } from 'react-router-dom';
import { tasksState } from 'recoilElements/atoms';
import { useRecoilState } from 'recoil';
import { toEditTask, toTaskDetails } from 'assets/helpers/routes';
import { removeItemAtIndex, replaceItemAtIndex } from 'assets/helpers/helpers';
import TaskActionButton from '../TaskActionButton';
import { ReactComponent as UnCompletedIcon } from 'assets/images/uncompleted.svg';
import { ReactComponent as CompletedIcon } from 'assets/images/completed.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/remove.svg';
import { ReactComponent as EditIcon } from 'assets/images/edit.svg';

const ListItem = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const index = tasks.findIndex(({ id }) => id === task.id);

  const toggleDone = () => {
    const newList = replaceItemAtIndex(tasks, index, {
      ...task,
      completed: !task.completed,
    });
    setTasks(newList);
  };

  const removeTask = () => {
    const newList = removeItemAtIndex(tasks, index);
    setTasks(newList);
  };

  return (
    <Flex
      as="li"
      sx={{
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
          {task.completed ? <UnCompletedIcon /> : <CompletedIcon />}
        </TaskActionButton>
        <TaskActionButton onClickFunction={removeTask}>
          <RemoveIcon />
        </TaskActionButton>
        <TaskActionButton>
          <Link to={toEditTask({ id: task.id })}>
            <EditIcon />
          </Link>
        </TaskActionButton>
      </Box>
    </Flex>
  );
};

export default ListItem;
