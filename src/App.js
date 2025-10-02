import './App.css';
import axios from 'axios';
import React, { useState, state, useEffect } from 'react';
import getVideos from './Api/FetchVideos.js';
import moods from './Data/Data.js';

function App() {
  const [ moodSelected, setMoodSelected ] = useState(false)
  const [ loading, isLoading ] = useState(true)

  const handleMoodClick = (e) => {
    console.log(e, "click")
    getVideos(e)
  }

  return ( 
    <body className="App">
      <header className="App-header">
        <h1>MoodSing!</h1>
      </header>
      <main>
        <ul className='mood-list'>
          {moods.map(mood => <button onClick={() => handleMoodClick(mood.query)} key={mood.name} className={`${mood.name} mood-selector`}>{mood.name}</button>)}
        </ul>
      </main>
    </body>
  );
}
export default App;
