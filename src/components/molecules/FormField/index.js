import React from 'react';
import { Box, Input, Label } from '@theme-ui/components';

const FormField = ({ label, name, asWhat = 'input', onChange, value }) => {
  return (
    <Box mb={12}>
      <Label htmlFor={name} mb={1}>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        as={asWhat}
        px={10}
        py={12}
        variant={asWhat === 'textarea' ? 'forms.textarea' : 'forms.input'}
        sx={{
          resize: 'none',
          lineHeight: 1.25,
        }}
        value={value}
        onChange={onChange}
        required
      />
    </Box>
  );
};

export default FormField;
