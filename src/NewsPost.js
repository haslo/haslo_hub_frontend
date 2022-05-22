import {Avatar, Box, Button, Card, Divider, Stack, Typography} from "@mui/material";
import NewsPostButton from "./NewsPostButton";

function NewsPost({newsPost}) {
  return (
    <Card>
      <Box sx={{p: 2, display: 'flex'}}>
        <Avatar variant="rounded" src={newsPost.type.icon.url}/>
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>
            {newsPost.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {newsPost.type.title} -
            <Button href={newsPost.type.channelUrl}>{newsPost.type.channelTitle}</Button>
          </Typography>
        </Stack>
      </Box>
      <Divider/>
      <NewsPostButton
        href={newsPost.originalUrl}
        imageTitle={newsPost.shortTitle}
        imageUrl={newsPost.thumbnailImage.url}
      />
    </Card>
  )
}

export default NewsPost;