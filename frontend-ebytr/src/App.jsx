import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={TaskList} />
      </Routes>
    </div>
  );
}

export default App;
