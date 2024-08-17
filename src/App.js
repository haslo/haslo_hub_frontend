import './App.css';

import {useState} from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

import SearchAppBar from "./SearchAppBar";
import NewsPosts from "./NewsPosts";
import SoundCloudIFrame from "./SoundCloudIFrame";
import BottomBar from "./BottomBar";
import useFetchNewsPostsAndNewestContent from './useFetchNewsPostsAndNewestContent';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchEventSent, setSearchEventSent] = useState(false);
  const { newsPosts, newestContentId } = useFetchNewsPostsAndNewestContent();

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <SearchAppBar
          setSearchQuery={setSearchQuery}
          searchEventSent={searchEventSent}
          setSearchEventSent={setSearchEventSent}
        />
        <SoundCloudIFrame
          newestContentId={newestContentId}
        />
        <NewsPosts
          searchQuery={searchQuery}
          newsPosts={newsPosts}
          style={{marginTop: '50px'}}
        />
        <BottomBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
