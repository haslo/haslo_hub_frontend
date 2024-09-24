import {useState} from "react";
import {Waypoint} from "react-waypoint";

import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

import {MusicPostCard} from "./MusicPostCard";

export function MusicPosts({searchQuery, musicPosts}) {

  const [maxScroll, setMaxScroll] = useState(9);

  if (!musicPosts) {
    return (
      <Container fixed style={{marginTop: '100px'}}>
        <Typography variant='h4' align='center' sx={{color: 'white'}}>
          Loading...
        </Typography>
      </Container>
    );
  }

  const filteredPosts = musicPosts.filter((newsPost) => {
    if (searchQuery === '') {
      return true;
    } else {
      return newsPost.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newsPost.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newsPost.type.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
  });

  if (filteredPosts.length > 0) {
    return (
      <>
        <Container fixed style={{marginTop: '40px'}}>
          <Grid container spacing={3} rowSpacing={2}>
            {filteredPosts.slice(0, maxScroll).map(newsPost => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={newsPost.sys.id}>
                <MusicPostCard newsPost={newsPost}></MusicPostCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Waypoint
          onEnter={() => {
            setMaxScroll(maxScroll + 6);
          }}
        >
          <div style={{height: '50px'}}/>
        </Waypoint>
      </>
    );
  } else {
    return (
      <Container fixed style={{marginTop: '40px'}}>
        <Typography variant='h4' align='center' sx={{color: 'white'}}>
          No results for "{searchQuery}", sorry!
        </Typography>
      </Container>
    );
  }
}
