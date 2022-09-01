import {useState, useEffect} from "react";
import {Waypoint} from "react-waypoint";

import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

import NewsPostCard from "./NewsPostCard";

function NewsPosts({searchQuery, isFiltering}) {

  const [newsPosts, setNewsPosts] = useState(null);
  const [maxScroll, setMaxScroll] = useState(9);

  useEffect(() => {
    const query = `
    {
      newsPostCollection(order: [publicationDate_DESC, title_ASC], limit: 1000) {
        items {
          title
          shortTitle
          description
          originalUrl
          remoteId
          publicationDate
          isVideo
          isAudio
          thumbnailImage {
            contentType
            url
          }
          type {
            title
            channelTitle
            channelUrl
            icon {
              contentType
              url
            }
            sys {
              id
            }
          }
          sys {
            id
          }
        }
      }
    }
    `
    const fetchGraphQlData = (query, retries) => {
      // Is this a token in the repository?
      // yes, it is - it's a read-only token for published CMS content,
      // which the client also uses to make a request from the browser the SPA is running in.
      // So go ahead and steal it, it's yours anyway :)
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/wehngbocf979/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ck9CqB4ydwUdbKGF6quZzIqVS0JvmlMhWQJnFSnODrA",
          },
          body: JSON.stringify({query}),
        })
        .then((response) => response.json())
        .then(({data, errors}) => {
          if (errors) {
            console.error(errors);
            console.log(`retries ${retries}, retrying? ${retries < 5}`);
            if (retries < 5) {
              setTimeout(() => {
                fetchGraphQlData(query, retries + 1);
              }, 1000)
            }
          } else {
            setNewsPosts(data.newsPostCollection.items);
          }
        });
    }
    fetchGraphQlData(query, 0);
  }, []);

  if (!newsPosts) {
    return (
      <Container fixed style={{marginTop: '100px'}}>
        <Typography variant='h4' align='center' sx={{color: 'white'}}>
          Loading...
        </Typography>
      </Container>
    );
  }

  const filteredPosts = newsPosts.filter((newsPost) => {
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
                <NewsPostCard newsPost={newsPost}></NewsPostCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Waypoint
          onEnter = {() => {
            setMaxScroll(maxScroll + 6);
          }}
        ><div style={{height: '50px'}}/></Waypoint>
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

export default NewsPosts;
