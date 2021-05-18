import React from 'react';
import { Box, Button, Flex, Heading, Link } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ taskTitle, isDone }) => {
  return (
    <Flex
      as="li"
      sx={{
        width: '250px',
        height: '250px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bg: 'confetti',
      }}
      mb={14}
    >
      <Heading as="h3" mt={12}>
        {taskTitle}
      </Heading>
      <Link mt={50}>Check details</Link>
      <Box mt={100} sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
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
          {isDone ? <FontAwesomeIcon icon={faCheck} /> : ''}
        </Button>
        <Button
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
