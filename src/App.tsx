import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import SomeComponent from './components/smthNotImportant';


const cards = [
  {
      title:"Lizard",
      imagePath:"contemplative-reptile.jpg",
      description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
]


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SomeComponent />
    </div>
  );
}

export default App;
