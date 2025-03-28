import * as React from "react";

import {Box, Typography} from "@mui/material";

export function PriceStamp({color, price, top}) {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: top,
          right: 10,
          backgroundColor: color,
          color: 'white',
          borderRadius: '50%',
          width: 80,
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotate(15deg)',
          boxShadow: `0 0 0 5px ${color}`,
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
        <Typography variant="subtitle1" fontWeight="bold" sx={{textAlign: 'center', lineHeight: 0.8}}>
          {price ?
            price :
            <>
              coming<br/>soon-ish
            </>
          }
        </Typography>
      </Box>
    </>
  );
}
