import React from 'react';
import './App.css';
import Main from './Components/Main';
import CatList from './Components/Cats/CatList';
import CatIndex from './Components/Cats/CatIndex';
import Cats from './Components/Cats/Cats';

function App() {
  return (
    <React.Fragment>
      <Main />
      <CatIndex />
      <CatList />
      <Cats />
    </React.Fragment>
  );
}

export default App;