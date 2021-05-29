import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Box, Button, Heading, Text } from '@theme-ui/components';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDom.createPortal(
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minHeight: '300px',
        minWidth: '600px',
        bg: 'white',
        borderRadius: '50px',
        boxShadow: '0 -5px 25px -10px rgba(0,0,0,.3)',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Heading as="h4">Confirmation</Heading>
      <Text as="p">{children}</Text>
      <Button
        onClick={handleClose}
        sx={{
          width: '100px',
          padding: '10px 20px',
          bg: 'pastelGreen',
          color: 'white',
          border: '2px solid #61DB92',
          borderRadius: '50px',
          '&:hover': {
            cursor: 'pointer',
            bg: 'white',
            color: 'pastelGreen',
          },
        }}
      >
        Close
      </Button>
    </Box>,
    modalNode
  );
};

export default Modal;
