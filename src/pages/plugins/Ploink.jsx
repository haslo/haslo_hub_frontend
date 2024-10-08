import * as React from "react";

import {Box, CardMedia, Typography} from "@mui/material";

import {PriceStamp} from "./PriceStamp";

export function Ploink({plugin_link}) {
  return (
    <>
      <Box sx={{position: 'relative', marginBottom: '30px'}}>
        <PriceStamp
          top={10}
          color={'#f50057'}
          price={'FREE'}
        />
        <a href={plugin_link} className={"plugin_card"}>
          <CardMedia
            component="img"
            height="300"
            image={"/assets/ploink.png"}
            alt={"Ploink Screenshot"}
            sx={{padding: "1em 1em 0 1em", objectFit: "contain"}}
          />
        </a>
      </Box>
      <Typography variant="h5" color="text.secondary" sx={{marginBottom: '10px'}}>
        Bouncing with Fun
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
