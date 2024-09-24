import {CardMedia} from "@mui/material";
import * as React from "react";

export function Ploink({plugin_link}) {
  return (
    <>
      <a href={plugin_link}>
        <CardMedia
          component="img"
          height="300"
          image={"/assets/ploink.png"}
          alt={"Ploink Screenshot"}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </a>
    </>
  );
}
