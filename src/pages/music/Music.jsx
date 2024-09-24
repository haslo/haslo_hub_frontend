import * as React from 'react';

import {SoundCloudIFrame} from "./SoundCloudIFrame";
import {MusicPosts} from "./MusicPosts";

import {fetchMusicApiData} from '../../services/ApiAdapter';

export function Music({searchQuery}) {
  const {musicPosts, newestContentId} = fetchMusicApiData();

  return (
    <>
      <SoundCloudIFrame
        newestContentId={newestContentId}
      />
      <MusicPosts
        searchQuery={searchQuery}
        musicPosts={musicPosts}
        style={{marginTop: '50px'}}
      />
    </>
  );
}
