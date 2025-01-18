import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';

import {RedirectWrapper} from "./shared/RedirectWrapper";
import {SearchAppBar} from "./shared/SearchAppBar";
import {BottomBar} from "./shared/BottomBar";
import {NavButtons} from "./shared/NavButtons";

import {Music} from "./pages/music/Music";
import {Plugins} from "./pages/plugins/Plugins";

import {Impressum} from "./pages/content/Impressum";
import {PrivacyNotice} from "./pages/content/PrivacyNotice";
import {RefundPolicy} from "./pages/content/RefundPolicy";
import {TermsOfService} from "./pages/content/TermsOfService";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEventSent, setSearchEventSent] = useState(false);

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
      <RedirectWrapper>
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
                <Music
                  searchQuery={searchQuery}
                />
              }/>
              <Route path="/plugins" element={
                <Plugins
                  searchQuery={searchQuery}
                />
              }/>
              <Route path="/tos" element={
                <TermsOfService
                  searchQuery={searchQuery}
                />
              }/>
              <Route path="/impressum" element={
                <Impressum
                  searchQuery={searchQuery}
                />
              }/>
              <Route path="/privacy" element={
                <PrivacyNotice
                  searchQuery={searchQuery}
                />
              }/>
              <Route path="/refunds" element={
                <RefundPolicy
                  searchQuery={searchQuery}
                />
              }/>
            </Routes>
            <BottomBar/>
          </ThemeProvider>
        </div>
      </RedirectWrapper>
    </Router>
  );
}

export default App;
