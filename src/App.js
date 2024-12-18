import React from 'react';
import './App.css';
import Counter from './components/counterApp/counter';
import Task from './components/taskApp/Task';
import Https from './components/http/HttpApi';
import StudentForm from './components/form/StudentForm';
import CounterApp from './components/counterApp/CounterApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/reactRouter/About';
import Post from './components/reactRouter/Post';
import Contact from './components/reactRouter/Contact';
import NavBar from './components/reactRouter/NavBar';



function App() {
  return (
    // <div className="App">
    //   {/* <Counter/> */}
    //   <CounterApp/>
    //   <Task/>
    //   {/* <Https/> */}
    //   <StudentForm/>
      
    // </div>
  <BrowserRouter>
  <NavBar/>
  <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/contact" element={<Contact/>}/>

     
  </Routes>
  </BrowserRouter>
  );
}

export default App;
