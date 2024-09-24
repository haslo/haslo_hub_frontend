import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

import * as React from "react";

export function PluginCard({avatar_name, avatar_image_url, avatar_link, plugin_title, plugin_link, plugin_content}) {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{paddingX: 1}}>
          <CardHeader
            avatar={
              <a href={avatar_link} name={avatar_name}>
                <Avatar variant="rounded" alt={avatar_name} src={avatar_image_url}/>
              </a>
            }
            title={
              <a href={plugin_link} name={plugin_title}>
                <Typography variant='h4'>
                  {plugin_title}
                </Typography>
              </a>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {plugin_content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
