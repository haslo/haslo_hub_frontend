import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

import * as React from "react";

export function PluginCard({title, content}) {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{paddingX: 1}}>
          <CardHeader
            title={
              title
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
