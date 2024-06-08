import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; 2024 My Static Site. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
