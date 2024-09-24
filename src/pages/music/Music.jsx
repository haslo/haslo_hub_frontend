import * as React from 'react';

import {SoundCloudIFrame} from "./SoundCloudIFrame";
import {MusicPosts} from "./MusicPosts";

import {fetchMusicApiData} from '../../services/ApiAdapter';

export function Music({searchQuery}) {
  const {newsPosts, newestContentId} = fetchMusicApiData();

  return (
    <>
      <SoundCloudIFrame
        newestContentId={newestContentId}
      />
      <MusicPosts
        searchQuery={searchQuery}
        newsPosts={newsPosts}
        style={{marginTop: '50px'}}
      />
    </>
  );
}
