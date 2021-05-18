import React from 'react';
import { Grid } from 'theme-ui';

const MainTemplate = ({ children }) => {
  return (
    <Grid
      as="main"
      gap={30}
      columns={['0.3fr 2fr']}
      p={10}
      sx={{
        justifyItems: 'center',
      }}
    >
      {children}
    </Grid>
  );
};

export default MainTemplate;
