'use client'; 
import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // allow usings state variable in functional components
  const [question, setQuestion] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const fetchQuestion = async (nextQuestionId = 1) => {
    try {
      const response = await fetch(`/api/quiz/questions?qu_id=${nextQuestionId}`);
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const startQuiz = async () => {
    try {
      const response = await fetch('/api/session/start-quiz');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSessionId(data.sessionId);
      fetchQuestion();
    } catch (error) {
      console.error('Error starting quiz:', error);
    }
  };

  const handleAnswer = async (answerId) => {
    if (!answerId) {
      console.error('Invalid answer ID:', answerId);
      return;
    }
    try {
      const response = await fetch('/api/session-answer/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sess_id: sessionId,
          answer_id: answerId,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Fetch the next question based on the answer
      fetchQuestion(data.nextQuestionId);
    } catch (error) {
      console.error('Error submitting answer:', error);
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
          {sessionId && question && (
            <div className="question">
              <p>{question.qu_txt}</p>
              {question.answerOptions.map((option) => (
                <button key={option.answer_id} onClick={() => handleAnswer(option.answer_id)}>
                  {option.answer_button}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
