import {useState, useEffect} from "react";

import {Container, Grid} from "@mui/material";
import NewsPostCard from "./NewsPostCard";
import Typography from "@mui/material/Typography";

function NewsPosts() {

  const [newsPosts, setNewsPosts] = useState(null);
  const [query] = useState(`
  {
    newsPostCollection {
      items {
        title,
        shortTitle,
        description,
        originalUrl,
        publicationDate,
        thumbnailImage {
          contentType
          url
        },
        type {
          title,
          channelTitle,
          channelUrl,
          icon {
            contentType
            url
          }
        }
      }
    }
  }
  `)

  useEffect(() => {
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
        }
        setNewsPosts(data.newsPostCollection.items);
      });
  }, [query]);

  if (!newsPosts) {
    return (
      <Container fixed>
        <Typography>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container fixed>
      <Grid container rowSpacing={2}>
        {newsPosts.map(newsPost => (
          <Grid item xs={12} md={6} lg={4} spacing={3}>
            <NewsPostCard newsPost={newsPost} key={newsPost.originalUrl}></NewsPostCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewsPosts;
