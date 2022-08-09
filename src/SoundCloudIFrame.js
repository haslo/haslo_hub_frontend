import {Container} from "@mui/material";

function SoundCloudIFrame() {
  const iframeHtml = '<iframe ' +
    'width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" ' +
    'src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1169395282&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">' +
    '</iframe>' +
    '<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">' +
    '<a href="https://soundcloud.com/glodjib" title="haslo" target="_blank" style="color: #cccccc; text-decoration: none;">haslo</a> · ' +
    '<a href="https://soundcloud.com/glodjib/omicron" title="Omicron" target="_blank" style="color: #cccccc; text-decoration: none;">Omicron</a>' +
    '</div>'
  return (
    <Container fixed style={{marginTop: '100px'}}>
      <div dangerouslySetInnerHTML={{__html: iframeHtml}}/>
    </Container>
  );
}

export default SoundCloudIFrame;
