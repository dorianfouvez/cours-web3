import React, { useState } from 'react';
import Button from '../Button/Button';
import Statistic from '../Statistic/Statistic';

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
    { text: 'positive', counter: good/allStatistics, signe:"%" },
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

const Statistics = (props) => {
  let isEmpty = true;
  props.all.forEach(prop => {
    if(prop.counter !== 0 && !isNaN(prop.counter)) {
      isEmpty = false;
      console.log(prop.counter, prop.counter !== 0, !isNaN(prop.counter));
    }
  });
  if (isEmpty) {
    return <div>No feedback given</div>;
  }
  // Ici on change Toutes les props lors d'un changement,
  // donc cela va, mais si il y a des renders separer, il faut eviter le map.
  return props.all.map((statistic, i) => {
    if(statistic.signe) 
      return <><Statistic key={i} text={statistic.text} counter={statistic.counter} signe={statistic.signe} /><br/></>;
    return <><Statistic key={i} text={statistic.text} counter={statistic.counter} /><br/></>;
  });
}

export default App;