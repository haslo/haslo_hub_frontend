import {useState, useEffect} from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Container, Grid} from "@mui/material";
import NewsPostCard from "./NewsPostCard";

function App() {

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
      <div className="App">
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      <Container sx={{marginX: 10, marginY: 10}}>
        <Grid container spacing={5}>
          {newsPosts.map(newsPost => (
            <NewsPostCard newsPost={newsPost} key={newsPost.originalUrl}></NewsPostCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
