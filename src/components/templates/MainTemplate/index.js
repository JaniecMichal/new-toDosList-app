import React from 'react';
import { Grid } from 'theme-ui';

const MainTemplate = ({ children }) => {
  return (
    <Grid
      as="main"
      gap={30}
      columns={['1fr 2fr']}
      p={10}
      bg="mercury"
      sx={{
        height: '100vh',
        justifyItems: 'center',
      }}
    >
      {children}
    </Grid>
  );
};

export default MainTemplate;
