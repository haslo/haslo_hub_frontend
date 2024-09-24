import { Link, useLocation } from "react-router-dom";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function NavButtons() {
  const location = useLocation();
  const theme = useTheme();
  const isTabletOrLower = useMediaQuery(theme.breakpoints.down('md'));

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

  return (
    <Container fixed style={{ marginTop: '100px' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: isTabletOrLower ? 'column' : 'row',
        width: '100%',
        mb: 2,
        gap: '15px',
        '& > *': {
          flexGrow: isTabletOrLower ? 0 : 1,
        },
      }}>
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
