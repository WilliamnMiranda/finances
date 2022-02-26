import React from "react";
import { GlobalStorage } from "./hooks/userProvider";
import Main from './views/Main'
function App() {
  return (
    <GlobalStorage>
          <Main/> 
    </GlobalStorage>
  );
}

export default App;
