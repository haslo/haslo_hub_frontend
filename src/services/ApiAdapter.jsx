// Contentful credentials (kept for future re-fetch if needed):
// Space: wehngbocf979
// Endpoint: https://graphql.contentful.com/content/v1/spaces/wehngbocf979/
// Token: ck9CqB4ydwUdbKGF6quZzIqVS0JvmlMhWQJnFSnODrA

import musicPosts from '../data/musicPosts.json';

const soundCloudPost = musicPosts.find(
  item => item.type && item.type.title === "SoundCloud Track"
);
const newestContentId = soundCloudPost ? soundCloudPost.remoteId : null;

export const fetchMusicApiData = () => {
  return { musicPosts, newestContentId };
};
