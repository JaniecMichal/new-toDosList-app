import React from 'react';
import { Box, Button, Flex, Heading, Link } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ taskTitle }) => {
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
      <Box mt={100}>
        <Button
          bg="christi"
          mr={1}
          sx={{
            '&:hover': {
              cursor: 'pointer',
              bg: 'lightChristi',
            },
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button
          bg="crimson"
          mr={1}
          sx={{
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
