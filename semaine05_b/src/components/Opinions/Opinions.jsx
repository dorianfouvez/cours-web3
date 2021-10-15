import React, { useContext } from "react";
import OpinionsContext from "../../contexts/OpinionsContext";
import Opinion from '../Opinion/Opinion'

const Opinions = () => {
  const { opinions, setVotes } = useContext(OpinionsContext)

  return (
    <div>{opinions.map(opinion => <Opinion key={opinion.label} opinion={opinion} /> )}</div>
  )
}

export default Opinions