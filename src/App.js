import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SearchAppBar from "./SearchAppBar";
import NewsPosts from "./NewsPosts";

function App() {

  return (
    <div className="App">
      <SearchAppBar/>
      <NewsPosts />
    </div>
  );
}

export default App;
