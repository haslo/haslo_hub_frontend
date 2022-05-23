import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {format} from "date-fns";
import {CardActionArea} from "@mui/material";

export default function NewsPostCard({newsPost}) {
  return (
    <Card sx={{paddingX: 1}}>
      <CardHeader
        avatar={
          <a href={newsPost.type.channelUrl}>
            <Avatar variant="rounded" src={newsPost.type.icon.url}/>
          </a>
        }
        title={newsPost.title}
        subheader={format(new Date(newsPost.publicationDate), 'yyyy-MM-dd')}
      />
      <CardActionArea href={newsPost.originalUrl}>
        <CardMedia
          component="img"
          height="194"
          image={newsPost.thumbnailImage.url}
          alt={newsPost.shortTitle}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {newsPost.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
