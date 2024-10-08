import React from 'react';

import {Container, Grid} from '@mui/material';

import {HeroBox} from "../../shared/HeroBox";

export function PrivacyNotice() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Privacy Policy"}
            hero_content={
              <>
                Privacy blabla
              </>
            }
          />
        </Grid>
      </Container>
    </>
  );
}