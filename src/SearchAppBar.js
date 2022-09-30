import * as React from 'react';
import {useTransition} from "react";

import {styled, alpha} from '@mui/material/styles';
import {
  AppBar,
  Box,
  CircularProgress,
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

export default function SearchAppBar({setSearchQuery, searchEventSent, setSearchEventSent}) {
  const [searchIsPending, startSearchTransition] = useTransition();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" color="primary" style={{opacity: '95%'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'block', sm: 'block'}}}
          >
            <a href='/' style={{textDecoration: 'none', color: 'white'}}>
              haslo.ch - Hardware Techno from Bern, Switzerland
            </a>
          </Typography>
          {searchIsPending ? <CircularProgress/> : <></>}
          <Search sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
              onChange={(event) => {
                startSearchTransition(() => {
                  const searchString = event.target.value;
                  setSearchQuery(searchString);
                  if (!searchEventSent) {
                    window.dataLayer.push({
                      event: "search_start",
                    });
                    setSearchEventSent(true);
                  }
                  window.dataLayer.push({
                    event: "search_string",
                    searchString: searchString,
                  });
                })
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
