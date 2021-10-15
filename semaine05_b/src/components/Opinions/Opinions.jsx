import React, { useContext } from "react";
import OpinionsContext from "../../contexts/OpinionsContext";
import Opinion from '../Opinion/Opinion'

const Opinions = () => {
  const { opinions } = useContext(OpinionsContext);

  let filteredOpinions = opinions.sort((a,b) => b.votes - a.votes);

  return (
    <div>{filteredOpinions.map(opinion => <Opinion key={opinion.label} opinion={opinion} /> )}</div>
  )
}

export default Opinions