import * as React from "react";

import {CardMedia} from "@mui/material";

export function Destruktor({plugin_link}) {
  return (
    <>
      <a href={plugin_link}>
        <CardMedia
          component="img"
          height="300"
          image={"/assets/destruktor.png"}
          alt={"Destruktor Screenshot"}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </a>
    </>
  );
}
