import React from "react";
import usePeople from "../hooks/usePeople";

const People = () => {
  const { loading, results } = usePeople();

  if (loading) {
    return <div />;
  }

  return (
    <React.Fragment>
      {results.map(r => (
        <p key={r.name}>{r.name}</p>
      ))}
    </React.Fragment>
  );
};

export default People;
