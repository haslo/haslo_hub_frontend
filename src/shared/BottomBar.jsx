import React, {useState, useEffect} from "react";
import {Avatar, Box, List, ListItem, Typography} from "@mui/material";

export function BottomBar() {
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
    `;
    const fetchGraphQlData = (query, retries) => {
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
            if (retries < 5) {
              setTimeout(() => {
                fetchGraphQlData(query, retries + 1);
              }, 1000);
            }
          } else {
            setNewsPostTypes(data.newsPostTypeCollection.items);
          }
        });
    };
    fetchGraphQlData(query, 0);
  }, []);

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
  };

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    fontSize: "0.75rem",
    fontWeight: "bold",
    margin: "0 8px",
    "&:hover": {
      textDecoration: "none",
    },
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgb(34, 26, 86)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 0",
          opacity: 0.95,
        }}
      >
        <List style={flexContainer}>
          {newsPostTypes.map((newsPostType) => (
            <ListItem sx={{zoom: "50%", width: "auto"}} key={newsPostType.channelUrl}>
              <a
                href={newsPostType.channelUrl}
                name={newsPostType.channelDescription}
                key={newsPostType.sys.id}
              >
                <Avatar
                  variant="rounded"
                  alt={newsPostType.channelDescription}
                  src={newsPostType.icon.url}
                />
              </a>
            </ListItem>
          ))}
        </List>
        <List style={flexContainer} sx={{marginTop: "10px"}}>
          <Typography component="span" sx={linkStyle}>
            <a href="/tos" style={linkStyle}>
              Terms of Service
            </a>
            —
            <a href="/impressum" style={linkStyle}>
              Impressum
            </a>
            —
            <a href="/privacy" style={linkStyle}>
              Privacy Notice
            </a>
            —
            <a href="/refunds" style={linkStyle}>
              Refunds Policy
            </a>
          </Typography>
        </List>
      </footer>
    </Box>
  );
}
