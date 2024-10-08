import {Container, Typography, Button, Grid, Card, CardContent} from "@mui/material";
import * as React from "react";

export function SoundCloudIFrame({newestContentId}) {
  if (newestContentId !== null && newestContentId !== undefined) {
    const iframeHtml = '<iframe title="Featured Track" ' +
      'width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" ' +
      'src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
      newestContentId +
      '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">' +
      '</iframe>'

    return (
      <Container fixed style={{marginTop: '50px'}}>
        <div className="cookieconsent-optin-marketing">
          <div dangerouslySetInnerHTML={{__html: iframeHtml}}/>
        </div>
        <div className="cookieconsent-optout-marketing">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card sx={{paddingX: 1, marginTop: '10px', marginBottom: '25px'}}>
              <CardContent>
                <Typography variant='h4' sx={{textAlign: 'center', marginBottom: '20px'}}>
                  Newest track goes here..
                </Typography>                <Typography variant="body1" gutterBottom>
                  To listen to the music, please accept marketing cookies. This allows the website to embed the SoundCloud player.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{marginTop: '20px'}}
                  onClick={() => window.Cookiebot.renew()}
                >
                  Update Cookie Preferences
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Container>
    )
      ;
  }
}
