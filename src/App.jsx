import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';

import SearchAppBar from "./shared/SearchAppBar";
import BottomBar from "./shared/BottomBar";
import NavButtons from "./shared/NavButtons";

import NewsPosts from "./pages/music/NewsPosts";
import SoundCloudIFrame from "./pages/music/SoundCloudIFrame";
import Plugins from "./pages/plugins/Plugins";

import useFetchNewsPostsAndNewestContent from './services/ApiAdapter';

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
          <NavButtons/>
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
