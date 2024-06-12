'use client'; // Add this directive

import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [question, setQuestion] = useState(null);

  const fetchQuestion = async () => {
    try {
      const response = await fetch('/api/quiz/questions');
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Le Quiz</span>
                <h3>Le Quiz</h3>
              </div>
            </div>
          </div>
          <button onClick={fetchQuestion}>Fetch Question</button>
          {question && (
            <div className="question">
              <p>{question.qu_txt}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
