import * as React from "react";

import {Box, CardMedia, Typography} from "@mui/material";
import {PriceStamp} from "./PriceStamp";

export function Destruktor({plugin_link}) {
  return (
    <>
      <Box sx={{position: 'relative', marginBottom: '30px'}}>
        <PriceStamp
          color={'#243667'}
          price={'$10'}
        />
        <a href={plugin_link}>
          <CardMedia
            component="img"
            height="300"
            image={"/assets/destruktor.png"}
            alt={"Destruktor Screenshot"}
            sx={{padding: "1em 1em 0 1em", objectFit: "contain"}}
          />
        </a>
      </Box>
      <Typography variant="body" color="text.secondary">
        A distortion module that works as a...
      </Typography>
      <ul>
        <li>
          <Typography variant="body" color="text.secondary">
            Waveshaper
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="text.secondary">
            Wavefolder
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="text.secondary">
            Hard Clipper (if required)
          </Typography>
        </li>
      </ul>
      <Typography variant="body" color="text.secondary">
        ...with lots of possibilities for modulation. It allows for anything from subtle saturation to making white
        noise out of almost any input, but is more comfortable at the extremes of its sonic possibilities.
        <br/><br/>
        <strong>No oversampling</strong>, so be prepared for aliasing.
      </Typography>
    </>
  );
}
