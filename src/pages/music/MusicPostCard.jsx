import * as React from 'react';

import {format} from "date-fns";

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import HeadphonesIcon from '@mui/icons-material/Headphones';

export function MusicPostCard({newsPost}) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{paddingX: 1, marginBottom: '15px'}}>
        <CardHeader
          avatar={
            <a href={newsPost.type.channelUrl} name={newsPost.type.channelDescription}>
              <Avatar variant="rounded" alt={newsPost.type.channelDescription} src={newsPost.type.icon.url}/>
            </a>
          }
          title={
            <a href={newsPost.originalUrl}>
              {newsPost.title}
            </a>
          }
          subheader={format(new Date(newsPost.publicationDate), 'yyyy-MM-dd')}
        />
        <CardActionArea href={newsPost.originalUrl} target='_blank'
                        className={newsPost.isVideo ? 'video_card' : (newsPost.isAudio ? 'audio_card' : 'plain_card')}>
          <Box sx={{position: 'relative'}}>
            <CardMedia
              component="img"
              height={(newsPost.type.channelDescription === "YouTube") ? "194" : "250"}
              image={newsPost.thumbnailImage.url + '?fm=webp'}
              alt={newsPost.shortTitle}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.54)',
                color: 'white',
                padding: '10px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 2s',
                '&:hover': {
                  opacity: 0.7,
                  transition: 'opacity 0.5s',
                },
              }}
            >
              {
                newsPost.isVideo ?
                  <PlayCircleOutlineIcon sx={{fontSize: '100px'}}/> :
                  newsPost.isAudio ?
                    <HeadphonesIcon sx={{fontSize: '100px'}}/> :
                    <ImageIcon sx={{fontSize: '100px'}}/>
              }
            </Box>
          </Box>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {newsPost.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
