import React from 'react'

const ExamList = ({ exams, onVerify }) => {
    return (
        <div>
            <h2>Exams for Moderation</h2>
            <ul className="list-group">
                {exams.map((exam) => (
                    <li key={exam.id} className="list-group-item">
                        {exam.title}
                        <button className="btn btn-primary float-right" onClick={() => onVerify(exam)}>
                            Verify
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamList
