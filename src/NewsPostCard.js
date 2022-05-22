import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from "date-fns";
import {CardActionArea} from "@mui/material";

export default function NewsPostCard({newsPost}) {
  return (
    <Card sx={{maxWidth: 345, paddingX: 1}}>
      <CardActionArea href={newsPost.originalUrl}>
        <CardHeader
          avatar={
            <Avatar variant="rounded" src={newsPost.type.icon.url}/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
          title={newsPost.title}
          subheader={format(new Date(newsPost.publicationDate), 'yyyy-MM-dd')}
        />
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
