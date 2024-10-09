import React from 'react';
import {Container, Grid, Typography, Link} from '@mui/material';
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
                <Typography variant="body1" paragraph>
                  <em>Last updated: 2024-10-08</em>
                </Typography>
                <Typography variant="body1" paragraph>
                  At <strong>haslo's Plugins</strong>, we want you to be completely satisfied with your purchase. This
                  refund policy
                  outlines the terms and conditions for refunds on our products.
                </Typography>

                <Typography variant="h6" gutterBottom>
                  1. Refunds for Our Own Plugins
                </Typography>
                <Typography variant="body1" paragraph>
                  For all audio plugins developed and sold directly by <strong>haslo's Plugins</strong>:
                </Typography>
                <Typography variant="body1" paragraph>
                  <ul>
                    <li>We offer a 30-day, no questions asked refund policy.</li>
                    <li>The refund period starts from the date of purchase.</li>
                    <li>To request a refund, please contact us at <a
                      href="mailto:haslo@haslo.ch">haslo@haslo.ch</a> within the 30-day period.
                    </li>
                    <li>Once we receive your request, we will process the refund within 5-10 business days.</li>
                    <li>The refund will be issued using the original payment method.</li>
                  </ul>
                </Typography>

                <Typography variant="h6" gutterBottom>
                  2. Refunds for Cherry Audio / Voltage Modular Products
                </Typography>
                <Typography variant="body1" paragraph>
                  For products purchased through the Cherry Audio store for Voltage Modular:
                </Typography>
                <Typography variant="body1" paragraph>
                  <ul>
                    <li>These purchases are subject to Cherry Audio's refund policy.</li>
                    <li>Please refer to Cherry Audio's official <Link
                      href="https://cherryaudio.kayako.com/article/508-what-is-cherry-audio-s-refund-policy"
                       rel="noopener noreferrer">refund policy in their FAQ</Link></li>
                    <li>For refund requests on these products, please contact Cherry Audio's customer support directly.
                    </li>
                  </ul>
                </Typography>

                <Typography variant="h6" gutterBottom>
                  3. Exceptions
                </Typography>
                <Typography variant="body1" paragraph>
                  While we strive to make our refund policy as accommodating as possible, please note:
                </Typography>
                <Typography variant="body1" paragraph>
                  <ul>
                    <li>Refunds may be denied if we detect any misuse, fraud, or excessive refund claims.</li>
                    <li>We reserve the right to modify this refund policy at any time. Any changes will be effective
                      immediately upon posting on this page.
                    </li>
                  </ul>
                </Typography>

                <Typography variant="h6" gutterBottom>
                  4. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  If you have any questions about our refund policy, please contact us at: <a
                  href="mailto:haslo@haslo.ch">haslo@haslo.ch</a>
                </Typography>
              </>
            }
          />
        </Grid>
      </Container>
    </>
  );
}
