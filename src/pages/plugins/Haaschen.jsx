import * as React from "react";

import {Box, CardMedia, Typography} from "@mui/material";

import {FreeStamp} from "./FreeStamp";

export function Haaschen({plugin_link}) {
  return (
    <>
      <Box sx={{position: 'relative', marginBottom: '30px'}}>
        <FreeStamp/>
        <a href={plugin_link}>
          <CardMedia
            component="img"
            height="300"
            image={"/assets/haaschen.png"}
            alt={"Hääschen Screenshot"}
            sx={{padding: "1em 1em 0 1em", objectFit: "contain"}}
          />
        </a>
      </Box>
      <Typography variant="body2" color="text.secondary">
        The Haas effect is a stereo effect where one of the channels is delayed by a very short delay time. The two
        sounds that reach the listener's ears are then perceived as one binaural auditory event. The position of the
        sound in the stereo field as well as the width of the sound are influenced by the delay time used.
        <br/><br/>
        This free module allows you to use the effect on any mono or stereo signal, and also has a CV input for any kind
        of modulations.
      </Typography>
    </>
  );
}
