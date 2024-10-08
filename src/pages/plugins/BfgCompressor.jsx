import * as React from "react";

import {Box, CardMedia, Typography} from "@mui/material";

import {PriceStamp} from "./PriceStamp";

export function BfgCompressor({plugin_link}) {
  return (
    <>
      <Box sx={{position: 'relative', marginBottom: '30px'}}>
        <PriceStamp
          top={-60}
          color={'#243667'}
          price={null}
        />
      </Box>
      <Typography variant="h5" color="text.secondary" sx={{marginBottom: '10px'}}>
        Extreme Multiband Upward Compression
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You've heard this sound before. You've seen similar plugins before. This one will add a unique twist to the
        "extreme upward compression" game, with added distortion and wavefolding.
        <br/><br/>
        I'm using some algorithms from DeSTRuKTor here, but add oversampling and generally better DSP (as enabled by
        using C++ rather than Java in the background)... 🤓
      </Typography>
    </>
  );
}
