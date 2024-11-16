import React, { useState } from 'react'

const  StudentForm =() => {
    //? Manage state
    const [studentName, setStudentName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("science");
    const [content, setContent] = useState("");
    //? Manage handle
    const handleNamechange =()=>{}
  return (
    <div>StudentForm</div>
  )
}

export default StudentForm