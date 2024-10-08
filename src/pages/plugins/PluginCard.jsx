import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

import * as React from "react";

export function PluginCard({
                             avatar_name,
                             avatar_image_url,
                             avatar_link,
                             plugin_title,
                             card_subheader,
                             plugin_link,
                             plugin_content
                           }) {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{paddingX: 1, marginBottom: '15px'}}>
          <CardHeader
            avatar={
              avatar_link ?
                <a href={avatar_link} name={avatar_name}>
                  <Avatar variant="rounded" alt={avatar_name} src={avatar_image_url}/>
                </a> :
                <Avatar variant="rounded" alt={avatar_name} src={avatar_image_url}/>
            }
            title={
              avatar_link ?
                <a href={plugin_link} name={plugin_title} className={"plugin_card"}>
                  <Typography variant='h4'>
                    {plugin_title}
                  </Typography>
                </a> :
                <Typography variant='h4'>
                  {plugin_title}
                </Typography>
            }
            subheader={card_subheader}
          />
          <CardContent>
            {plugin_content}
          </CardContent>
          {
            plugin_link ?
              <Button
                component="a"
                href={plugin_link}
                fullWidth
                variant="contained"
                color="primary"
                sx={{marginBottom: '15px'}}
                className={"plugin_card"}
              >
                Get {plugin_title} here
              </Button> :
              <></>
          }
        </Card>
      </Grid>
    </>
  );
}
