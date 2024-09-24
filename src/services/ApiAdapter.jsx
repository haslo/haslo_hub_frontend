import { useState, useEffect } from 'react';

export const fetchMusicApiData = () => {
  const [musicPosts, setMusicPosts] = useState(null);
  const [newestContentId, setNewestContentId] = useState(null);

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
            console.error(errors);
            console.log(`retries ${retries}, retrying? ${retries < 5}`);
            if (retries < 5) {
              setTimeout(() => {
                fetchGraphQlData(query, retries + 1);
              }, 1000)
            }
          } else {
            setMusicPosts(data.newsPostCollection.items);

            // Find the first SoundCloud post and set its remoteId as the newest content ID
            const soundCloudPost = data.newsPostCollection.items.find(
              item => item.type && item.type.title === "SoundCloud Track"
            );
            if (soundCloudPost) {
              setNewestContentId(soundCloudPost.remoteId);
            }
          }
        });
    }

    fetchGraphQlData(query, 0);
  }, []);

  return { musicPosts, newestContentId };
};
