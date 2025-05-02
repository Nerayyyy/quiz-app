import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    answer: 'H2O',
  }
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === quizData[currentIndex].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    const next = currentIndex + 1;
    if (next < quizData.length) {
      setCurrentIndex(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Score score={score} total={quizData.length} />
      ) : (
        <>
          <Question
            question={quizData[currentIndex].question}
            options={quizData[currentIndex].options}
            onAnswerSelected={handleOptionClick}
            selectedOption={selected}
          />
          <div className="text-center mt-3">
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={selected === null}
            >
              {currentIndex + 1 < quizData.length ? 'Next' : 'Finish'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
