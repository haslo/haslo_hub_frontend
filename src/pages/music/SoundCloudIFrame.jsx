import {Container} from "@mui/material";

export function SoundCloudIFrame({newestContentId}) {
  if (newestContentId !== null && newestContentId !== undefined) {
    const iframeHtml = '<iframe title="Featured Track" ' +
      'width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" ' +
      'src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
      newestContentId +
      '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">' +
      '</iframe>'

    return (
      <Container fixed style={{marginTop: '50px'}}>
        <div dangerouslySetInnerHTML={{__html: iframeHtml}}/>
      </Container>
    );
  }
}
