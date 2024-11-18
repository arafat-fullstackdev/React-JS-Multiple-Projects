import React from 'react';
import './App.css';
import Counter from './components/counterApp/counter';
import Task from './components/taskApp/Task';
import Https from './components/http/HttpApi';
import StudentForm from './components/form/StudentForm';
import CounterApp from './components/counterApp/CounterApp';



function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterApp/>
      <Task/>
      {/* <Https/> */}
      <StudentForm/>
      
    </div>
  );
}

export default App;
