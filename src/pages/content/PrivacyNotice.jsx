import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { HeroBox } from "../../shared/HeroBox";

export function PrivacyNotice() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Privacy Notice"}
            hero_content={
              <>
                <Typography variant="body1" paragraph>
                  <em>Last updated: 2024-10-08</em>
                </Typography>
                <Typography variant="body1" paragraph>
                  This Privacy Notice explains how we collect, use, and protect your personal information when you use our website.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  1. Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                  We collect information through:
                  <ul>
                    <li>Google Analytics 4 (GA4): We use GA4 to analyze website traffic and user behavior.</li>
                    <li>Google Tag Manager (GTM): GTM helps us manage and deploy marketing tags on our website.</li>
                    <li>SoundCloud: We embed SoundCloud content, which may use cookies to enhance your experience.</li>
                    <li>Newsletter Subscription: If you opt-in to our newsletter, we collect your email address.</li>
                  </ul>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  2. How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph>
                  <ul>
                    <li>To analyze and improve our website's performance and user experience.</li>
                    <li>To provide personalized content and advertisements.</li>
                    <li>To send you our newsletter if you've subscribed.</li>
                    <li>To process and communicate with you about purchases, if applicable.</li>
                  </ul>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  3. Data Sharing and Third Parties
                </Typography>
                <Typography variant="body1" paragraph>
                  We may share data with:
                  <ul>
                    <li>Google: For analytics and marketing purposes.</li>
                    <li>SoundCloud: When you interact with embedded SoundCloud content.</li>
                    <li>Other third-party service providers necessary for our website operations.</li>
                  </ul>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  4. Cookies and Tracking Technologies
                </Typography>
                <Typography variant="body1" paragraph>
                  We use cookies and similar technologies to collect and store information when you visit our website. You can manage your cookie preferences through your browser settings.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  5. Newsletter
                </Typography>
                <Typography variant="body1" paragraph>
                  Our newsletter uses a double opt-in process. Your email address will only be used to send you the newsletter and related communications. You can unsubscribe at any time.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  6. Sales and Communication
                </Typography>
                <Typography variant="body1" paragraph>
                  If you make a purchase, we will only use your contact information for communications relevant to that specific sale.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  7. Your Rights
                </Typography>
                <Typography variant="body1" paragraph>
                  You have the right to access, correct, or delete your personal data. Please contact us at <a
                  href="mailto:haslo@haslo.ch">haslo@haslo.ch</a> for any privacy-related requests.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  8. Changes to This Privacy Notice
                </Typography>
                <Typography variant="body1" paragraph>
                  We may update this Privacy Notice from time to time. We will notify you of any significant changes by posting the new Privacy Notice on this page.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  9. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  If you have any questions about this Privacy Notice, please contact us at: <a
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
