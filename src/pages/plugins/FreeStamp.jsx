import * as React from "react";

import {Box, Typography} from "@mui/material";

export function FreeStamp() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: '#f50057',
          color: 'white',
          borderRadius: '50%',
          width: 80,
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotate(15deg)',
          boxShadow: '0 0 0 5px #f50057',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -5,
            left: -5,
            right: -5,
            bottom: -5,
            borderRadius: '50%',
            border: '2px dashed white',
          },
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          FREE
        </Typography>
      </Box>
    </>
  );
}
