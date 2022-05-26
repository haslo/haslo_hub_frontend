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

function App() {

  const [searchQuery, setSearchQuery] = useState('');

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
        <SearchAppBar setSearchQuery={setSearchQuery}/>
        <NewsPosts searchQuery={searchQuery} style={{marginTop: '50px'}}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
