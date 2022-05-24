import {useState, useEffect} from "react";

import {Container, Grid} from "@mui/material";
import NewsPostCard from "./NewsPostCard";
import Typography from "@mui/material/Typography";

function NewsPosts() {

  const [newsPosts, setNewsPosts] = useState(null);
  const [query] = useState(`
  {
    newsPostCollection(order: [publicationDate_DESC, title_ASC]) {
      items {
        title
        shortTitle
        description
        originalUrl
        remoteId
        publicationDate
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
  `)

  useEffect(() => {
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
    <Container fixed style={{marginTop: '50px'}}>
      <Grid container spacing={3} rowSpacing={2}>
        {newsPosts.map(newsPost => (
          <Grid item xs={12} sm={12} md={6} lg={4}key={newsPost.sys.id}>
            <NewsPostCard newsPost={newsPost}></NewsPostCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewsPosts;
