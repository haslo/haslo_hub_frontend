import React from 'react';

import {Container, Grid} from '@mui/material';

import {PluginCard} from "./PluginCard";

export function Plugins() {
  return (
    <>
      <Container fixed style={{marginTop: '40px'}}>
        <Grid container spacing={3} rowSpacing={2}>
          <PluginCard
            title={"Plugin 1"}
            content={"Content 1"}
          />
          <PluginCard
            title={"Plugin 2"}
            content={"Content 2"}
          />
        </Grid>
      </Container>
    </>
  );
}
