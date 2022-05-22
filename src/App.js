import './App.css';

import {useState, useEffect} from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  const [newsPosts, setNewsPosts] = useState(null);
  const [apiErrors, setApiErrors] = useState(null);
  const [query] = useState(`
  {
    newsPostCollection {
      items {
        title,
        description,
        originalUrl,
        thumbnailImage {
          contentType
          url
        },
        type {
          title,
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
          setApiErrors(errors.toString());
        }
        setNewsPosts(data.newsPostCollection.items);
      });
  }, [query]);

  if (!newsPosts) {
    return (
      <div className="App">
        Loading...<br/>
        {apiErrors}
      </div>
    );
  }

  return (
    <div className="App">
      {newsPosts.map(newsPost => (
        <div className="news-post">
          {newsPost.title}
        </div>
      ))}
    </div>
  );
}

export default App;
