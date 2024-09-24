import './App.css';

import {useState} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Button, Box, Container} from '@mui/material';
import {ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';

import SearchAppBar from "./shared/SearchAppBar";
import BottomBar from "./shared/BottomBar";

import NewsPosts from "./pages/music/NewsPosts";
import SoundCloudIFrame from "./pages/music/SoundCloudIFrame";
import Plugins from "./pages/plugins/Plugins";

import useFetchNewsPostsAndNewestContent from './useFetchNewsPostsAndNewestContent';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchEventSent, setSearchEventSent] = useState(false);
  const {newsPosts, newestContentId} = useFetchNewsPostsAndNewestContent();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#221a56',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <SearchAppBar
            setSearchQuery={setSearchQuery}
            searchEventSent={searchEventSent}
            setSearchEventSent={setSearchEventSent}
          />
          <Container fixed style={{marginTop: '100px'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, mb: 2}}>
              <Button component={Link} to="/" variant="contained" sx={{mr: 2}}>
                Music
              </Button>
              <Button component={Link} to="/plugins" variant="contained">
                Plugins
              </Button>
            </Box>
          </Container>
          <Routes>
            <Route path="/" element={
              <>
                <SoundCloudIFrame
                  newestContentId={newestContentId}
                />
                <NewsPosts
                  searchQuery={searchQuery}
                  newsPosts={newsPosts}
                  style={{marginTop: '50px'}}
                />
              </>
            }/>
            <Route path="/plugins" element={<Plugins/>}/>
          </Routes>
          <BottomBar/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
