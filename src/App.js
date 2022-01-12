import React from 'react';
import './App.css';
import Main from './Components/Main';
import CatIndex from './Components/Cats/CatIndex';

function App() {
  return (
    <React.Fragment>
      <Main />
      <CatIndex />
    </React.Fragment>
  );
}

export default App;