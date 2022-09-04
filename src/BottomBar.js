import {useState, useEffect} from "react";

import {AppBar, Avatar, Box, Toolbar, List, ListItem} from "@mui/material";

export default function BottomBar() {

  const [newsPostTypes, setNewsPostTypes] = useState([]);

  useEffect(() => {
    const query = `
    {
      newsPostTypeCollection(order: [sortOrder_ASC], limit: 1000) {
        items {
          title
          channelDescription
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
            console.log(data.newsPostTypeCollection.items);
            setNewsPostTypes(data.newsPostTypeCollection.items);
          }
        });
    }
    fetchGraphQlData(query, 0);
  }, [])

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    align: 'center',
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" color="primary"
              sx={{top: 'auto', bottom: 0, display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Toolbar variant={'dense'} sx={{display: 'flex', justifyContent: 'center', width: 'calc(100% - 32px)'}}>
          <List style={flexContainer}>
            {newsPostTypes.map(newsPostType => (
              <ListItem sx={{zoom: '50%'}}>
                <a href={newsPostType.channelUrl} name={newsPostType.channelDescription} key={newsPostType.sys.id}>
                  <Avatar variant="rounded" alt={newsPostType.channelDescription} src={newsPostType.icon.url}/>
                </a>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
