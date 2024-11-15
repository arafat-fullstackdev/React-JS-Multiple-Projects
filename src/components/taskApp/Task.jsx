import React from 'react';
import { useState } from 'react';

const Task = () => {
    const [tasks, setTask] = useState([
        {id: 1, name:"Finish React Dev", completed:true},
        {id: 2, name:"Finish React Eng", completed:false},
        {id: 3, name:"Finish React Next5", completed:true},
        {id: 4, name:"Finish React MVC", completed:true},
    ])
    console.log(tasks);

  return (
    <div className='text-align text-center' style={{textAlign:"center"}}>
    <h2>Task List</h2>
    <ul style={{listStyleType:"none"}}>
        {tasks.map((task) =>{
            return(
                <li key={task.id}>
                    {task.name} - {task.completed ? "Completed" : "Pending"}</li>
            )

        })};
        
    </ul>
    </div>
  )
}

export default Task;