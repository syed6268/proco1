import React, { useState } from 'react';

function Waste({ questions }) {
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
  const [username, setUsername] = useState('');

  const handleOptionChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prompt user to enter their username
    const enteredUsername = prompt("Please enter your username:");

    // If the user cancels or doesn't enter a username, do nothing
    if (!enteredUsername) return;

    let score = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        score++;
      }
    });

    // Make POST request to send username and score
    try {
      const response = await fetch('http://localhost:8000/api/v0/jobpost/updateapplicant/661b90611c77484cdb28bd71', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: enteredUsername,
          score: score,
        }),
      });

      // Check if request was successful
      if (response.ok) {
        // Display username and score in alert
        alert(`Username: ${enteredUsername}\nYour score is: ${score}/${questions.length}`);
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Exam Questions</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 'bold' }}>{question.content}</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={`option-${index}-a`}
                  name={`question-${index}`}
                  value="a"
                  checked={selectedOptions[index] === 'a'}
                  onChange={() => handleOptionChange(index, 'a')}
                />
                <label htmlFor={`option-${index}-a`} style={{ marginLeft: '5px' }}>
                  {question.a}
                </label>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={`option-${index}-b`}
                  name={`question-${index}`}
                  value="b"
                  checked={selectedOptions[index] === 'b'}
                  onChange={() => handleOptionChange(index, 'b')}
                />
                <label htmlFor={`option-${index}-b`} style={{ marginLeft: '5px' }}>
                  {question.b}
                </label>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={`option-${index}-c`}
                  name={`question-${index}`}
                  value="c"
                  checked={selectedOptions[index] === 'c'}
                  onChange={() => handleOptionChange(index, 'c')}
                />
                <label htmlFor={`option-${index}-c`} style={{ marginLeft: '5px' }}>
                  {question.c}
                </label>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={`option-${index}-d`}
                  name={`question-${index}`}
                  value="d"
                  checked={selectedOptions[index] === 'd'}
                  onChange={() => handleOptionChange(index, 'd')}
                />
                <label htmlFor={`option-${index}-d`} style={{ marginLeft: '5px' }}>
                  {question.d}
                </label>
              </li>
            </ul>
          </div>
        ))}
        <button
          type="submit"
          style={{
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Waste;
