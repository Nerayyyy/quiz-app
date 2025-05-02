import React from 'react';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center">React Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
