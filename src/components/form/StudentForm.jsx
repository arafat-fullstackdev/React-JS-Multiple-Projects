import React, { useState } from 'react'

const  StudentForm =() => {
    //? Manage state //
    const [studentName, setStudentName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("science");
    const [content, setContent] = useState("");

    //? Manage handle //
    const handleNameChange =(e)=>{
        console.log(e.target.value);
    }
    const handleAgeChange =(e)=>{}
    const handleCourseChange =(e)=>{}
    const handleContentChange =(e)=>{} 

    //! Handle submit //
    const handleSubmit =(e) =>{
        

    }

  return (
    <form action="">
        <h2>Student Registration Form</h2>
        <div>
            <label>Name:</label>
            <input type="text" value={studentName}
            onChange={handleNameChange} />
        </div>
    </form>
  )
}

export default StudentForm