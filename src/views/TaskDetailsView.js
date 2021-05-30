import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Heading, Spinner } from '@theme-ui/components';
import { useParams } from 'react-router';
import SubHeader from 'components/atoms/SubHeader';
import { Link } from 'react-router-dom';
import { toTaskListView } from 'assets/helpers/routes';
import { useAPI } from 'hooks/useAPI';

const TaskDetailsView = () => {
  const { id } = useParams();
  const { sendGETRequest, response, setLoading, error } = useAPI();

  useEffect(() => {
    setLoading(true);
    sendGETRequest(id);
  }, [id, setLoading]);

  if (error) {
    return (
      <Box
        sx={{
          width: '100%',
          padding: '30px',
          fontWeight: '700',
          color: 'crimson',
          a: {
            textDecoration: 'none',
            color: 'pastelGreen',

            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Heading mb={10}>
          Something went wrong... please back to homepage
        </Heading>
        <Link to={toTaskListView()}>Back to tasks list</Link>
      </Box>
    );
  }

  if (response) {
    return (
      <Box sx={{ width: '100%' }} bg="milkPunch" p={30}>
        <Flex
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 10,
            borderBottom: '2px solid #222',
            marginBottom: 12,

            a: {
              textDecoration: 'none',
              color: 'pastelGreen',
              fontWeight: '700',

              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          <SubHeader>Details of task</SubHeader>
          <Link to={toTaskListView()}>Back to tasks list</Link>
        </Flex>
        <Text as="p" mt={5}>
          Task description:
          <Text ml={1} sx={{ fontWeight: '700' }}>
            {response.title}
          </Text>
        </Text>
        <Text as="p" mt={5}>
          Status:
          <Text
            ml={1}
            color={response.completed ? 'pastelGreen' : 'crimson'}
            sx={{ fontWeight: '700', textTransform: 'uppercase' }}
          >
            {response.completed ? 'completed' : 'uncompleted'}
          </Text>
        </Text>
      </Box>
    );
  }
  return <Spinner />;
};

export default TaskDetailsView;
