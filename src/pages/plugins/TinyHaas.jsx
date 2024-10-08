import * as React from "react";

import {Box, CardMedia, Typography} from "@mui/material";

import {PriceStamp} from "./PriceStamp";

export function TinyHaas({plugin_link}) {
  return (
    <>
      <Box sx={{position: 'relative', marginBottom: '30px'}}>
        <PriceStamp
          top={-60}
          color={'#f50057'}
          price={'FREE'}
        />
      </Box>
      <Typography variant="h5" color="text.secondary" sx={{marginBottom: '10px'}}>
        Like HÄÄSchen, but multiband and VST3
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Ploink is a trigger / gate module that generates a series of triggers or gates out of one incoming trigger. Each
        trigger goes faster and faster, until the minimum length is reached and the sequence of triggers / gates stops.
        <br/><br/>
        <strong>This module does not generate sound.</strong> You can use the gates for an envelope, or the triggers for
        advancing a sequence, as a sync signal for sample&hold modules, that kind of thing.
      </Typography>
    </>
  );
}
