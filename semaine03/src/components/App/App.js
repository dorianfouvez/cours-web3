import React, { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allStatistics = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button changeCount={setGood} text='good' count={good} />
      <Button changeCount={setNeutral} text='neutral' count={neutral} />
      <Button changeCount={setBad} text='bad' count={bad} />
      <h1>statistics</h1>
      <Display text='good' counter={good} /><br/>
      <Display text='neutral' counter={neutral} /><br/>
      <Display text='bad' counter={bad} /><br/>
      <Display text='all' counter={allStatistics} /><br/>
      <Display text='average' counter={(good + neutral*0 + -bad)/allStatistics} /><br/>
      <Display text='positive' counter={good/allStatistics} /><br/>
    </div>
  );
}

export default App;
