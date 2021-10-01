import React from 'react'
import Statistic from '../Statistic/Statistic';

const Statistics = (props) => {
    return <table><tbody><StatisticsBody all={props.all} /></tbody></table>;
};

const StatisticsBody = (props) => {
    let isEmpty = true;
    props.all.forEach(prop => {
      if(prop.counter !== 0 && !isNaN(prop.counter)) {
        isEmpty = false;
      }
    });
    if (isEmpty) {
      return <tr><td>No feedback given</td></tr>;
    }
    // Ici on change Toutes les props lors d'un changement,
    // donc cela va, mais si il y a des renders separer, il faut eviter le map.
    return props.all.map((statistic, i) => {
      if(statistic.signe) 
        return <tr key={i}><Statistic text={statistic.text} counter={statistic.counter} signe={statistic.signe} /></tr>;
      return <tr key={i}><Statistic text={statistic.text} counter={statistic.counter} /></tr>;
    });
}

export default Statistics