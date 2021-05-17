import React from 'react';
import { Heading } from '@theme-ui/components';

const SubHeader = ({ children }) => {
  return (
    <Heading as="h2" variant="headings.secondary">
      {children}
    </Heading>
  );
};

export default SubHeader;
