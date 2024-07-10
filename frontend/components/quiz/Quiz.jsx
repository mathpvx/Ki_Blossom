import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [message, setMessage] = useState('');

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

      if (data.message) {
        setMessage(data.message);
        setRecommendations(null);
      } else {
        setMessage('');
        setRecommendations(data.recommendations);
      }

      if (data.nextQuestionId) {
        fetchQuestion(data.nextQuestionId);
      } else {
        console.log('Received Recommendations:', data.recommendations);
        setRecommendations(data.recommendations ||[]);
      }
      // Set the message if the answer ID is 1
      if (answerId === 1) {
        setMessage('Par mesure de précaution, nous vous invitons à consutler votre médecin ou votre pharmacien pour toute question.');
      } else {
        setMessage(''); // Reset message if other answers
      }
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
          <button className="start-quiz-button" onClick={startQuiz}>Faire le Quiz</button>
          {sessionId && question && (
            <div className="question-container">
              <p className="question">{question.qu_txt}</p>
              <div className="answer-buttons">
                {question.answerOptions.map((option) => (
                  <button key={option.answer_id} className="answer-button" onClick={() => handleAnswer(option.answer_id)}>
                    {option.answer_button}
                  </button>
                ))}
              </div>
            </div>
          )}
          {message && (
            <div className="message">
              <p>{message}</p>
            </div>
          )}
          {!message && recommendations && recommendations.length > 0 && (
            <div className="recommendations">
              <h3>Recommendations</h3>
              <ul>
                {recommendations.map((reco) => (
                  <li key={reco.reco_id}>
                    {reco.Dietetics && (
                      <div>
                        <p>{reco.Dietetics.description}</p>
                        {reco.Dietetics.img_url && <img src={reco.Dietetics.img_url} />}
                      </div>
                    )}
                    {reco.EssentialOil && (
                      <div>
                        <h4>{reco.EssentialOil.name}</h4>
                        <p>{reco.EssentialOil.description}</p>
                        <p>{reco.EssentialOil.explanation}</p>
                        {reco.EssentialOil.img_url && <img src={reco.EssentialOil.img_url} alt={reco.EssentialOil.name} />}
                      </div>
                    )}
                    {reco.Food1 && (
                      <div>
                        <h4>{reco.Food1.name}</h4>
                        <p>{reco.Food1.description}</p>
                        <p>{reco.Food1.explanation}</p>
                        {reco.Food1.img_url && <img src={reco.Food1.img_url} alt={reco.Food1.name} />}
                      </div>
                    )}
                    {reco.Food2 && (
                      <div>
                        <h4>{reco.Food2.name}</h4>
                        <p>{reco.Food2.description}</p>
                        <p>{reco.Food2.explanation}</p>
                        {reco.Food2.img_url && <img src={reco.Food2.img_url} alt={reco.Food2.name} />}
                      </div>
                    )}
                    {reco.Plant && (
                      <div>
                        <h4>{reco.Plant.name}</h4>
                        <p>{reco.Plant.description}</p>
                        <p>{reco.Plant.explanation}</p>
                        {reco.Plant.img_url && <img src={reco.Plant.img_url} alt={reco.Plant.name} />}
                      </div>
                    )}
                    {reco.WbExercice && (
                      <div>
                        <h4>{reco.WbExercice.name}</h4>
                        <p>{reco.WbExercice.description}</p>
                        <p>{reco.WbExercice.explanation}</p>
                        {reco.WbExercice.img_url && <img src={reco.WbExercice.img_url} alt={reco.WbExercice.name} />}
                      </div>
                    )}
                    {reco.Unhealthy && (
                      <div>
                        <h4>{reco.Unhealthy.name}</h4>
                        <p>{reco.Unhealthy.risk}</p>
                        <p>{reco.Unhealthy.advice}</p>
                        {reco.Unhealthy.img_url && <img src={reco.Unhealthy.img_url} alt={reco.Unhealthy.name} />}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
