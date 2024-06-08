import { useState } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [answers, setAnswers] = useState({ q1: '', q2: '' });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/quiz/submit', { answers });
      alert('Quiz submitted!');
    } catch (error) {
      console.error('Error submitting quiz', error);
    }
  };

  return (
    <div className="container">
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Question 1: <br />
          <input type="radio" name="q1" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="q1" value="no" onChange={handleChange} /> No
        </label>
        <br />
        <label>
          Question 2: <br />
          <input type="radio" name="q2" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="q2" value="no" onChange={handleChange} /> No
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}