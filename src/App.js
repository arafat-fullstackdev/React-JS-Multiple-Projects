import React from 'react';
import './App.css';
import Counter from './components/counterApp/counter';
import Task from './components/taskApp/Task';
import Https from './components/http/HttpApi';



function App() {
  return (
    <div className="App">
      <Counter/>
      <Task/>
      <Https/>
    </div>
  );
}

export default App;
