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
          price={null}
        />
      </Box>
      <Typography variant="h5" color="text.secondary" sx={{marginBottom: '10px'}}>
        Like HÄÄSchen, But Multiband And VST3
      </Typography>
      <Typography variant="body2" color="text.secondary">
        If you don't know what HÄÄSchen is, it's a Voltage Modular module I built a while ago.
        It's just a Haas effect, where one of the channels is delayed by a very short delay time
        and adds the impression of width.
        <br/><br/>
        This version will be a bit more ambitious and will add multiband processing (which <em>will</em> lead to
        phasing effects, that's the whole point of that) and in-plugin modulation.
      </Typography>
    </>
  );
}
