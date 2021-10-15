import React, { useContext } from "react";
import OpinionsContext from "../../contexts/OpinionsContext";

const Opinion = ({ opinion }) => {
  const { setVotes } = useContext(OpinionsContext);

  const handler = () => {
    setVotes(opinion.label);
  }

  return (
    <div><span>{opinion.label} : {opinion.votes}</span> <button onClick={handler}>Vote</button></div>
  )
}

export default Opinion