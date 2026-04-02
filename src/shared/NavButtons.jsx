import {Link, useLocation} from "react-router-dom";

import {Button, Container, Grid} from "@mui/material";

export function NavButtons() {
  const location = useLocation();
  const hostname = window.location.hostname;
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';

  const buttonStyle = {
    width: '100%',
    height: '60px',
    fontSize: '1rem',
    backgroundColor: 'rgba(245,0,87,0.5)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(245,0,87,0.9)',
    },
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(245,0,87,0.9)',
  };

  const musicIsLocal = isLocal || hostname === 'cybergwen.com';
  const pluginsIsLocal = isLocal || hostname === 'haslo.ch';

  return (
    <Container fixed style={{ marginTop: '100px' }}>
      <Grid container spacing={3} rowSpacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Button
            component={musicIsLocal ? Link : 'a'}
            {...(musicIsLocal ? {to: '/'} : {href: 'https://cybergwen.com/'})}
            sx={location.pathname === '/' ? activeButtonStyle : buttonStyle}
            fullWidth
          >
            MUSIC
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Button
            component={pluginsIsLocal ? Link : 'a'}
            {...(pluginsIsLocal ? {to: '/plugins'} : {href: 'https://haslo.ch/plugins'})}
            sx={location.pathname === '/plugins' ? activeButtonStyle : buttonStyle}
            fullWidth
          >
            PLUGINS
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
