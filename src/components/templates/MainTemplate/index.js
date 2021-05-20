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
        '@media screen and (max-width: 800px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default MainTemplate;
