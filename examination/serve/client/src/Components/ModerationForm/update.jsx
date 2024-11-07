import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample Data
const departments = [
    {
        name: "Electrical & Electronics Engineering",
        courses: [
            {
                name: "ICT",
                units: ["Calculus", "Data Structures"],
                levels: [4, 5, 6],
            },
            {
                name: "Electrical Engineering",
                units: ["Fundamentals of Electricity", "Circuit Analysis"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "Mechanical Engineering",
        courses: [
            {
                name: "Geography",
                units: ["Introduction to Geography", "Advanced Geography"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "Computing & Information",
        courses: [
            {
                name: "Geography",
                units: ["Introduction to Geography", "Advanced Geography"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "Fashion Design & Cosmetics",
        courses: [
            {
                name: "ICT",
                units: ["Calculus", "Data Structures"],
                levels: [4, 5, 6],
            },
            {
                name: "Electrical Engineering",
                units: ["Fundamentals of Electricity", "Circuit Analysis"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "Business Studies",
        courses: [
            {
                name: "ICT",
                units: ["Calculus", "Data Structures"],
                levels: [4, 5, 6],
            },
            {
                name: "Electrical Engineering",
                units: ["Fundamentals of Electricity", "Circuit Analysis"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "Tourism & Hospitality",
        courses: [
            {
                name: "1",
                units: ["Calculus", "Data Structures"],
                levels: [4],
            },
            {
                name: "2",
                units: ["Fundamentals of Electricity", "Circuit Analysis"],
                levels: [5],
            },
            {
                name: "3",
                units: ["Fundamentals of Electricity", "Circuit Analysis"],
                levels: [6],
            },
        ],
    },
];

// Guidelines for moderation
const guidelines = [
    "Is the time allocated adequate/appropriate for the tasks given?",
    "Has the course outline been made available to the moderating team?",
    "Are the exam items aligned to the learning outcomes listed in the course outline?",
    "Are the question statements clear? Do they provide adequate guidance to the examinee?",
    "Is the examination comprehensive and appropriate, given the course content, learning outcomes, and class schedule?",
    "Is the examination appropriate for the level it is set?",
    "Do the exam items test various levels of knowledge, comprehension, analysis, synthesis, application, and evaluation?",
    "Has a marking scheme covering all the exam items been provided?",
    "Does the marking scheme provide adequate detail and direction for another examiner to assess the responses?",
    "Are the marks allocated commensurate with the expected responses?"
];

// Main Admin Dashboard Component
const AdminDashboard = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [moderationResults, setModerationResults] = useState({});
    const [status, setStatus] = useState('');

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
        resetSelections();
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        resetSelections();
    };

    const handleUnitChange = (e) => {
        setSelectedUnit(e.target.value);
        // Assuming level is determined by unit selection
        const courseData = getCourseData(selectedDepartment, selectedCourse);
        if (courseData) {
            setSelectedLevel(courseData.levels[0]); // Default to first level
        }
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const getCourseData = (departmentName, courseName) => {
        const department = departments.find(dep => dep.name === departmentName);
        return department ? department.courses.find(course => course.name === courseName) : null;
    };

    const resetSelections = () => {
        setSelectedUnit('');
        setSelectedLevel('');
        setModerationResults({});
    };

    const handleGuidelineChange = (index, value) => {
        setModerationResults({
            ...moderationResults,
            [index]: { ...moderationResults[index], answer: value }
        });
    };

    const handleCommentChange = (index, comment) => {
        setModerationResults({
            ...moderationResults,
            [index]: { ...moderationResults[index], comment }
        });
    };

    const handleSubmitExam = () => {
        console.log(`Submitting exam for ${selectedUnit} in ${selectedCourse}, ${selectedDepartment}, Level ${selectedLevel}`);
        
        // Here you would typically submit moderation results to your backend or database
        console.log(moderationResults);

        // Reset selections after submission
        resetSelections();
        setStatus('Exam submitted successfully.');
        
        // Reset moderation results after submission
        setModerationResults({});
    };

    return (
        <div className="container">
            <h1>Examination Moderator System</h1>
            
            <div className="form-group">
                <label>Department:</label>
                <select className="form-control" value={selectedDepartment} onChange={handleDepartmentChange}>
                    <option value="">Select Department</option>
                    {departments.map(department => (
                        <option key={department.name} value={department.name}>{department.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Course:</label>
                <select className="form-control" value={selectedCourse} onChange={handleCourseChange} disabled={!selectedDepartment}>
                    <option value="">Select Course</option>
                    {selectedDepartment && departments.find(dep => dep.name === selectedDepartment).courses.map(course => (
                        <option key={course.name} value={course.name}>{course.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Unit:</label>
                <select className="form-control" value={selectedUnit} onChange={handleUnitChange} disabled={!selectedCourse}>
                    <option value="">Select Unit</option>
                    {selectedCourse && getCourseData(selectedDepartment, selectedCourse)?.units.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Level:</label>
                <select className="form-control" value={selectedLevel} onChange={handleLevelChange} disabled={!selectedUnit}>
                    <option value="">Select Level</option>
                    {selectedUnit && getCourseData(selectedDepartment, selectedCourse)?.levels.map(level => (
                        <option key={level} value={level}>{level}</option>
                    ))}
                </select>
            </div>

            {/* Guidelines Evaluation */}
            <h3>Guidelines Evaluation</h3>
            {guidelines.map((guideline, index) => (
                <div key={index} className="mb-3">
                    <p>{guideline}</p>
                    <div className="form-group">
                        <label>Answer:</label>
                        <select 
                            className="form-control" 
                            onChange={(e) => handleGuidelineChange(index, e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Moderation Comments:</label>
                        <textarea 
                            className="form-control" 
                            rows="2" 
                            onChange={(e) => handleCommentChange(index, e.target.value)}
                        ></textarea>
                    </div>
                </div>
            ))}

            <button className="btn btn-primary" onClick={handleSubmitExam} disabled={!selectedLevel || !selectedUnit}>Submit Exam</button>

            {status && <div className="alert alert-info mt-3">{status}</div>}
            
            {/* Exam List and Moderation Form could be added here */}
            
        </div>
    );
};

// Export the main component
export default AdminDashboard;