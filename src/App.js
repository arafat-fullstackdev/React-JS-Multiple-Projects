import React from 'react';
import './App.css';
import Counter from './components/counterApp/counter';
import Task from './components/taskApp/Task';
import Http from './components/http/http';


function App() {
  return (
    <div className="App">
      <Counter/>
      <Task/>
      <Http/>
    </div>
  );
}

export default App;
