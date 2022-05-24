import * as React from 'react';
import {useState} from "react";

import {styled, alpha} from '@mui/material/styles';
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({setSearchQuery, setIsFiltering}) {
  const [timer, setTimer] = useState(null);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            <a href='/' style={{textDecoration: 'none', color: 'white'}}>
              haslo.ch - haslo's Content Portal
            </a>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
              onChange={(event) => {
                setIsFiltering(true);
                if (timer) {
                  clearTimeout(timer);
                  setTimer(null);
                }
                setTimer(
                  setTimeout(() => {
                    setSearchQuery(event.target.value);
                    setIsFiltering(false);
                  }, 500)
                );
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
