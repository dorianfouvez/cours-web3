import React, { useState } from 'react';
import Button from '../Button/Button';
import Statistics from '../Statistics/Statistics';
import { getRandomInt } from '../utils';

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
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const maxNumberForAnecdote = anecdotes.length-1;
  const [selected, setSelected] = useState(getRandomInt(maxNumberForAnecdote));

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Button changeCount={setSelected} text='next anecdote' count={0} maxNumber={maxNumberForAnecdote} />
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
