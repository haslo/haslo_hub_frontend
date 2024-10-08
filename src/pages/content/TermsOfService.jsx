import React from 'react';
import {Container, Grid, Typography, Link} from '@mui/material';
import {HeroBox} from "../../shared/HeroBox";

export function TermsOfService() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Terms of Service"}
            hero_content={
              <>
                <Typography variant="body1" paragraph>
                  <em>Last updated: 2024-10-08</em>
                </Typography>
                <Typography variant="body1" paragraph>
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using <a
                  href={"https://haslo.ch"}>haslo.ch</a> (the "Service") operated by <strong>haslo's
                  Plugins</strong> ("us", "we", or
                  "our").
                </Typography>
                <Typography variant="h6" gutterBottom>
                  1. Acceptance of Terms
                </Typography>
                <Typography variant="body1" paragraph>
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                  of the terms, then you may not access the Service.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  2. Description of Service
                </Typography>
                <Typography variant="body1" paragraph>
                  Our Service provides a platform to:
                  <ul>
                    <li>Showcase and provide information about our music and videos</li>
                    <li>Advertise our plugins available in the Voltage Modular store</li>
                    <li>Describe and, in the future, sell our own audio plugins, including but not limited to VST3, AU,
                      and other formats, encompassing audio effects, visual effects, and synthesizers
                    </li>
                  </ul>
                  The Service may be updated or expanded in the future to include additional features or products.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  3. Sales and Purchases
                </Typography>
                <Typography variant="body1" paragraph>
                  a. Sales through Cherry Audio: Products for Voltage Modular are sold through the Cherry Audio store.
                  These sales are subject to Cherry Audio's policies, which can be found at <Link
                  href="https://cherryaudio.com/privacy" target="_blank"
                  rel="noopener noreferrer">https://cherryaudio.com/privacy</Link>. We do not collect or have access to
                  personal information related to these sales.
                </Typography>
                <Typography variant="body1" paragraph>
                  b. Future Sales: In the future, we may offer direct sales through our website. These sales will be
                  processed by Paddle as our Merchant of Record. By making a purchase, you agree to comply with Paddle's
                  terms of service.
                </Typography>
                <Typography variant="body1" paragraph>
                  c. Refunds and Cancellations: Please refer to <a href={"/refunds"}>our Refund Policy</a>.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  4. User Accounts
                </Typography>
                <Typography variant="body1" paragraph>
                  In the future, we may implement user accounts. When this feature becomes available, you will be
                  responsible for safeguarding the password that you use to access the Service and for any activities or
                  actions under your password.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  5. Intellectual Property
                </Typography>
                <Typography variant="body1" paragraph>
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of <strong>haslo's Plugins</strong> and its licensors. The Service is protected by copyright,
                  trademark,
                  and other laws.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  6. Links To Other Web Sites
                </Typography>
                <Typography variant="body1" paragraph>
                  Our Service may contain links to third-party websites or services that are not owned or controlled by
                  <strong>haslo's Plugins</strong>. We have no control over, and assume no responsibility for, the
                  content, privacy
                  policies, or practices of any third-party websites or services.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  7. Termination
                </Typography>
                <Typography variant="body1" paragraph>
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for
                  any reason whatsoever, including without limitation if you breach the Terms.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  8. Limitation of Liability
                </Typography>
                <Typography variant="body1" paragraph>
                  In no event shall <strong>haslo's Plugins</strong>, nor its directors, employees, partners, agents,
                  suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses, resulting from your access to or use of or inability to access or use the Service.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  9. Governing Law
                </Typography>
                <Typography variant="body1" paragraph>
                  These Terms shall be governed and construed in accordance with the laws of Switzerland,
                  without regard to its conflict of law provisions.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  10. Changes
                </Typography>
                <Typography variant="body1" paragraph>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What
                  constitutes a material change will be determined at our sole discretion.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  11. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  If you have any questions about these Terms, please contact us at <a
                  href="mailto:haslo@haslo.ch">haslo@haslo.ch</a>.
                </Typography>
              </>
            }
          />
        </Grid>
      </Container>
    </>
  );
}
