import React from 'react';
import { Box, Input } from '@theme-ui/components';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';

const Searching = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Input
        sx={{
          width: '400px',
          maxWidth: '500px',
          padding: '12px 29px',
          bg: 'white',
          border: 'none',
          borderRadius: '60px',
        }}
        placeholder="Search..."
      />
      <Box sx={{ position: 'absolute', top: '12px', right: '12px' }}>
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default Searching;
