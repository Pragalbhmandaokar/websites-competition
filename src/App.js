import React from 'react';
import './App.css';
//import Header from './components/header/header';
//import Body from './components/body/body';
import Competition from './components/competition/competition';
import Submission from './components/upload/submission';
function App() {
  return (
    <div className="App">
      <Submission></Submission>
      <Competition></Competition>
      {/* <Body></Body> */}
    </div>
  );
}

export default App;
