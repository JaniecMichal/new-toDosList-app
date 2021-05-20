import React from 'react';
import { Box, Button, Flex, Heading } from '@theme-ui/components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { tasksState } from 'recoilElements/atoms';
import { useRecoilState } from 'recoil';
import { toEditTask } from 'assets/helpers/routes';
import { removeItemAtIndex, replaceItemAtIndex } from 'assets/helpers/helpers';

const ListItem = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const index = tasks.findIndex(({ id }) => id === task.id);

  const toggleDone = () => {
    const newList = replaceItemAtIndex(tasks, index, {
      ...task,
      done: !task.done,
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
        height: '250px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        bg: `${task.done ? 'scoripion' : 'confetti'}`,
        padding: '10px',
        a: {
          color: 'teal',
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
        }}
      >
        {task.title}
      </Heading>
      <Link to={''}>Check details</Link>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={toggleDone}
          bg="christi"
          mr={1}
          sx={{
            width: '50px',
            height: '40px',
            padding: '10px',
            '&:hover': {
              cursor: 'pointer',
              bg: 'lightChristi',
            },
          }}
        >
          {task.done ? <FontAwesomeIcon icon={faCheck} /> : ''}
        </Button>
        <Button
          onClick={removeTask}
          bg="crimson"
          mr={1}
          sx={{
            width: '50px',
            height: '40px',
            padding: '10px',
            '&:hover': {
              cursor: 'pointer',
              bg: 'lightCrimson',
            },
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button
          bg="turbo"
          sx={{
            display: 'block',
            width: '50px',
            height: '40px',
            padding: '10px',
            a: {
              color: 'inherit',
            },
            '&:hover': {
              cursor: 'pointer',
              bg: 'lightTurbo',
            },
          }}
        >
          <Link to={toEditTask({ id: task.id })}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default ListItem;
