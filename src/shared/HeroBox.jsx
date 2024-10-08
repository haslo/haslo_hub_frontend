import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import * as React from "react";

export function HeroBox({hero_title, hero_content}) {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card sx={{paddingX: 1, marginTop: '10px', marginBottom: '25px'}}>
          <CardContent>
            <Typography variant='h4' sx={{textAlign: 'center', marginBottom: '20px'}}>
              {hero_title}
            </Typography>
            {hero_content}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
