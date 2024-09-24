import {Link, useLocation} from "react-router-dom";

import {Box, Button, Container} from "@mui/material";

function NavButtons() {
  const location = useLocation();

  const buttonStyle = {
    width: '50%',
    height: '60px',
    fontSize: '1rem',
    backgroundColor: '#f50057',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c51162',
    },
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#c51162',
  };

  return (
    <Container fixed style={{marginTop: '100px'}}>
      <Box sx={{display: 'flex', width: '100%', mb: 2}}>
        <Button
          component={Link}
          to="/"
          sx={location.pathname === '/' ? activeButtonStyle : buttonStyle}
        >
          Music
        </Button>
        <Button
          component={Link}
          to="/plugins"
          sx={location.pathname === '/plugins' ? activeButtonStyle : buttonStyle}
        >
          Plugins
        </Button>
      </Box>
    </Container>
  );
}

export default NavButtons;
