import React, { useState } from 'react';
import Button from '../Button/Button';
import Statistics from '../Statistics/Statistics';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allStatistics = good + neutral + bad;

  const all = [
    { text: 'good', counter: good },
    { text: 'neutral', counter: neutral },
    { text: 'bad', counter: bad },
    { text: 'all', counter: allStatistics },
    { text: 'average', counter: (good + neutral*0 + -bad)/allStatistics },
    { text: 'positive', counter: (good/allStatistics)*100, signe:"%" },
  ];

  return (
    <div>
      <h1>give feedback</h1>
      <Button changeCount={setGood} text='good' count={good} />
      <Button changeCount={setNeutral} text='neutral' count={neutral} />
      <Button changeCount={setBad} text='bad' count={bad} />
      <h1>statistics</h1>
      <Statistics all={all} />
    </div>
  );
}

export default App;
