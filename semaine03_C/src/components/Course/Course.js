import React from "react";
import Header from '../Header/Header'
import Content from '../Content/Content'
import Total from '../Total/Total'

const Course = (props) => {
    let totalOfExercises = 0;
    props.course.parts.map(part => totalOfExercises += part.exercises);
    return (
        <div>
          <Header course={props.course.name} />
          <Content array={props.course.parts} />
          <Total exercises={totalOfExercises} />
          <h1 className="header">Test</h1>
        </div>
    )
}

export default Course