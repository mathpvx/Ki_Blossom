'use client'; 
import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [question, setQuestion] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const fetchQuestion = async () => {
    try {
      const response = await fetch('/api/quiz/questions');
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const startQuiz = async () => {
    console.log('Button clicked, starting quiz...');
    try {
      const response = await fetch('/api/session/start-quiz');
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Generated session ID:', data.sessionId);
      setSessionId(data.sessionId);
      // Optionally, you can fetch a question immediately after starting the quiz
      fetchQuestion();
    } catch (error) {
      console.error('Error starting quiz:', error);
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
          <button onClick={startQuiz}>Start Quiz</button>
          {sessionId && (
            <div className="session-info">
              <p>Session ID: {sessionId}</p>
            </div>
          )}
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
