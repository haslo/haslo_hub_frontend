import {CardMedia} from "@mui/material";
import * as React from "react";

export function Haaschen({plugin_link}) {
  return (
    <>
      <a href={plugin_link}>
        <CardMedia
          component="img"
          height="300"
          image={"/assets/haaschen.png"}
          alt={"Hääschen Screenshot"}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </a>
    </>
  );
}
