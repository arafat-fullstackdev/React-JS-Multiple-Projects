import React, { useState } from 'react'

const StudentForm = () => {
    //? Manage state //
    const [studentName, setStudentName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("Science");
    const [content, setContent] = useState(false);

    //? Manage handle //
    const handleNameChange = (e) => {
        setStudentName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    }
    const handleContentChange = (e) => {
        setContent(e.target.checked);
    }

    //! Handle submit //
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            studentName,
            age,
            course,
            content,
        })
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Student Registration Form</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={studentName}
                    onChange={handleNameChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age}
                    onChange={handleAgeChange} />
            </div>
            <div>
                <label>Course:</label>
                <select value={course} onChange={handleCourseChange}>
                    <option value={'Math'}>Math</option>
                    <option value={'Physics'}>Physics</option>
                    <option value={'Chemistry'}>Chemistry</option>
                    <option value={'Biology'}>Biology</option>
                </select>
            </div>
            <div>
                <label>Content:</label>
                <input type="checkbox" checked={content}
                    onChange={handleContentChange} />
            </div>
            <button type='submit'>Register</button>
        </form>
    )
}

export default StudentForm