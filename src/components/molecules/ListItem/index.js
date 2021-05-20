import React from 'react';
import { Box, Button, Flex, Heading, Link } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { tasksState } from 'recoilElements/atoms';
import { useRecoilState } from 'recoil';

const ListItem = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const index = tasks.findIndex(({ id }) => id === task.id);

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

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
        width: '250px',
        height: '250px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bg: `${task.done ? 'scoripion' : 'confetti'}`,
      }}
      mb={14}
    >
      <Heading as="h3" mt={12}>
        {task.title}
      </Heading>
      <Link mt={50}>Check details</Link>
      <Box mt={100} sx={{ display: 'flex', alignItems: 'center' }}>
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
            width: '50px',
            height: '40px',
            padding: '10px',
            '&:hover': {
              cursor: 'pointer',
              bg: 'lightTurbo',
            },
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </Box>
    </Flex>
  );
};

export default ListItem;
