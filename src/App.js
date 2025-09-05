import './App.css';
import axios from 'axios';
import React, { useState, state, useEffect } from 'react';
import { moods } from './Data/Data.js';

function App() {
  const [ moodSelected, setMoodSelected ] = useState(false)
  const [ loading, isLoading ] = useState(true)

  return (
    <body className="App">
      <header className="App-header">
        <h1>MoodSing!</h1>
      </header>
      <main>
        <ul className='mood-list'>
          {moods.map(mood => <button key={mood} className={`${mood} mood-selector`}>{mood}</button>)}
        </ul>
      </main>
    </body>
  );
}
export default App;
