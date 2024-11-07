import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample Data
const departments = [
    {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        trainers: ["Mr Wambui", "Mr Lupe"],
        courses: [
            {
                name: "ELECTRICAL INSTALLATION",
                units: ["DIGITAL LITERACY",
                        "WORKPLACE ESSENTIAL SKILLS",
                        "ENGINEERING MATHEMATICS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "TESTING OF ELECTICAL INSTALLATION",
                        "ELECTRICAL INSTALLATION BREAKDOWN MAINTENANCE",
                    ],
                levels: [4],
            },
            {
                name: "ELECTRICAL OPERATION",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "ELECTRICAL TRANSMISSION POWER LINES",
                        "ELECTRICAL MACHINE INSTALLATION",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRONICS",
                        "SECURITY SYSTEM INSTALLATION",
                        "SOLAR SYSTEM INSTALLATION",
                        "ELECTRICAL BREAKDOWN MAINTENANCE",
                    ],
                levels: [5],
            },
            
            {
                name: "ELECTRICAL ENGINEERING",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRIAL PRINCIPLES",
                        "ELECTRICAL INSTALLATION",
                        "ELECTRICAL TRANSMISION POWER LINES",
                        "POWER GENERATION",
                        "ELECTRICAL MACHINE INSTALLATION",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "ENGINEERING MATHEMATICS",
                        "TECHNICAL DRAWING",
                        "WORKSHP TECHNOLOGY",
                        "ELECTRONICS",
                        "ELECTRICAL MACHINE AUTOMATION",
                        "ELECTRICAL PROJECT MANAGEMENT",
                        "SECURITY SYSTEMS INSTALLATION",
                        "SOLAR INSTALLATION",
                        "ELECTRICAL EQUIPMENT AND SYSTEM MAINTENANCE",

],
                levels: [6],
            },
            {
                name: "ELECTRONICS TECHNOLOGY",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRONICS",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "ELECTRICAL INSTALLATION",
                        "POWER SUPPLY SYSTEMS",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRICAL MACHINE CONTROL",
                        "INDUSTRIAL AUTOMATION",
                        "AUTOMATION AND RADIO FREQUENCY SYSTEM MAINTENANCE",
                        "ELECTRICAL INSTRUMENTATION",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "POWER SUPPLY SYSTEM",
                        "RADIO FREQUENCY SYSTEM MAINTENANCE",

],
                levels: [5,6],
            },
           
        ],
    },
    {
        name: "LIBERAL STUDIES",
        trainers: ["Mr Konyo", "Mr Lucy"],
        courses: [
            {
                name: "SOCIAL WORK & COMMUNITY DEVELOPMENT",
                units: ["201 SOCIAL WORK THEORY AND PRACTICE",
                            "101 INTRODUCTION TO COMMUNITY DEVELOPMENT",
                            "102 DEVELOPMENT ECONOMICS",
                            "103 COMMUNITY BASED ORGANIZATIONS",
                            "104 COMMUNICATION SKILLS",
                            "102 ENTREPRENEURSHIP EDUCATION",
                            "103 COMMUNITY CAPACITY BUILDING AND EMPOWERMENT",
                            "104 INFORMATION COMMUNICATION TECHNOLOGY",
                            "RESOURCE MOBILIZATION AND FUNDRAISING",
                            "PROJECT MANAGEMENT",
                            "ADVOCACY AND LOBBYING",
                            "HIV AND AIDS AND OTHER PANDEMICS",
                            "STATISTICS",
                            "LEGAL ASPECTS IN SOCIAL DEVELOPMENT WORK",
                            "RESOURCE MANAGEMENT"
                        ],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "ICT",
        trainers: ["Mr Kungu","Mr Mwasya", "Mr Duke", "Mr Mugo", "Mr Bungei", "Mr Mwasi"],
        courses: [
            {
                name: "ICT TECHNICIAN",
                units: ["DEMONSTRATE COMMUNICATION SKILLS",
                        "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                        "DEMONSTRATE ENVIRONMENTAL LITERACY",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "USE ICT DEVICES",
                        "INSTALL COMPUTER SOFTWARE",
                        "REPAIR AND MAINTAIN A COMPUTER",
                        "APPLY MICROSOFT OFFICE TOOLS",
                        "USE THE INTERNET",                       
                        "PERFORM COMPUTER NETWORKING",
                        "PERFORM COMPUTER REPAIR AND MAINTENANCE",
                        "MANAGE DATABASE SYSTEM",
                        "DEVELOP COMPUTER PROGRAM",
                        "MANAGE OPERATING SYSTEM",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "APPLY BASIC ELECTRONICS",
                        "CONTROL ICT SECURITY THREATS",
                        "PERFORM ICT SYSTEM SUPPORT",
                        "PERFORM WEBSITE DESIGN",
                        "PERFORM MANAGEMENT INFORMATION SYSTEM",
                        "PERFORM GRAPHIC DESIGN",
                        "DEVELOP MOBILE APPLICATION",
                        "PERFORM SYSTEM ANALYSIS AND DESIGN",
],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "FASHON & DESIGN ",
        trainers: ["Mr Sheks", "Mr Cert"],
        courses: [
            {
                name: "COURSE 1",
                units: ["UNIT 1", "UNIT 2"],
                levels: [4, 5, 6],
            },
            {
                name: "COURSE 2",
                units: ["UNIT 33", "UNIT 22"],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "BUSINESS STUDIES",
        trainers: ["Mr Mwaura", "Madam Anny"],
        courses: [
            {
                name: "HUMAN RESOURSE",
                units: ["DEMONSTRATE COMMUNICATION SKILLS",
                         "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                       "DEMONSTRATE ENVIRONMENTAL LITERACY",
                       "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES ",  
                       "MANAGE ORGANIZATIONAL BEHAVIOUR",
                       "MANAGE HUMAN RESOURCES",
                       "INITIATE EMPLOYEE RESOURCING",
                        "COORDINATE PERFORMANCE MANAGEMENT",
                        "PREPARE HUMAN RESOURCE BUDGETS",
                        "COORDINATE LEARNING AND DEVELOPMENT",
                        "UNDERTAKE BUSINESS COMMUNICATION",
                        "MANAGE EMPLOYEE RELATIONS",
                        "COORDINATE ORGANIZATIONAL DEVELOPMENT",
                        "ENFORCE COMPLIANCE WITH LEGISLATIONS",
                        "MANAGE HUMAN RESOURCE INFORMATION SYSTEM (HRIS)",
                        "UNDERTAKE EMPLOYEE SEPARATION"],
                levels: [4, 5, 6],
            },
            {
                name: "SUPPLY CHAIN MANAGEMENT",
                units: ["105 COMMUNICATION SKILLS",
                        "LIFE SKILLS",
                        "INFORMATION COMMUNICATION TECHNOLOGY",
                        "ENTREPRENEURSHIP",
                        "WAREHOUSING OPERATIONS AND STOCK CONTROL",
                        "BUSINESS CALCULATIONS AND STATISTICS",
                        "COMMERCE",
                        "FINANCIAL ACCOUNTING",],
                levels: [4, 5, 6],
            },
        ],
    },
    {
        name: "TOURISM & HOSPITALITY",
        trainers: ["Mr Koti", "Mr Lote"],
        courses: [
            {
                name: "COURSE 2001",
                units: ["UNIT 101", "UNIT 1111"],
                levels: [4],
            },
            {
                name: "COURSE 2002",
                units: ["UNIT 0009", "UNIT 0005"],
                levels: [5],
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
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [moderationResults, setModerationResults] = useState({});
    const [status, setStatus] = useState('');

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
        setSelectedTrainer(''); // Reset trainer when department changes
        resetSelections();
    };

    // Define handleCommentChange to set comments for each guideline
        const handleCommentChange = (index, comment) => {
            setModerationResults(prevResults => ({
                ...prevResults,
                [index]: {
                    ...prevResults[index],
                    comment: comment
                }
            }));
        };

        // Define handleGuidelineChange to set answers for each guideline
        const handleGuidelineChange = (index, answer) => {
            setModerationResults(prevResults => ({
                ...prevResults,
                [index]: {
                    ...prevResults[index],
                    answer: answer
                }
            }));
        };

    const handleTrainerChange = (e) => {
        setSelectedTrainer(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        setSelectedUnit(''); // Clear the selected unit when a new course is selected
        setSelectedLevel(''); // Clear the selected level when a new course is selected
    };

    const handleUnitChange = (e) => {
        setSelectedUnit(e.target.value);
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
        setSelectedUnit(''); // Reset only unit and level
        setSelectedLevel('');
        setModerationResults({});
    };

    const handleSubmitExam = async () => {
        const payload = {
            department: selectedDepartment,
            trainer: selectedTrainer,
            course: selectedCourse,
            unit: selectedUnit,
            level: selectedLevel,
            answers: guidelines.map((guideline, index) => ({
                guideline,
                answer: moderationResults[index]?.answer || '',
                comment: moderationResults[index]?.comment || ''
            }))
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/moderation/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
    
            if (response.ok) {
                const data = await response.json();
                setStatus(data.message);
                const pdfResponse = await fetch(`http://localhost:5000/api/moderation/download/${data.id}`);
                const blob = await pdfResponse.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Moderation_${selectedUnit}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
    
                resetSelections();
            } else {
                setStatus('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error submitting exam:', error);
            setStatus('Error submitting data.');
        }
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
            {selectedDepartment && (
                <div className="form-group">
                    <label>Trainer:</label>
                    <select className="form-control" value={selectedTrainer} onChange={handleTrainerChange}>
                        <option value="">Select Trainer</option>
                        {departments.find(dep => dep.name === selectedDepartment).trainers.map(trainer => (
                            <option key={trainer} value={trainer}>{trainer}</option>
                        ))}
                    </select>
                </div>
            )}
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

            <button className="btn btn-primary" onClick={handleSubmitExam} disabled={!selectedLevel || !selectedUnit}>Submit Form</button>

            {status && <div className="alert alert-info mt-3">{status}</div>}
            
            {/* Exam List and Moderation Form could be added here */}
            
        </div>
    );
};

// Export the main component
export default AdminDashboard;