import React from 'react';

import {Container, Grid} from '@mui/material';

import {HeroBox} from "../../shared/HeroBox";

export function RefundPolicy() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Refund Policy"}
            hero_content={
              <>
                Refunds blabla
              </>
            }
          />
        </Grid>
      </Container>
    </>
  );
}
