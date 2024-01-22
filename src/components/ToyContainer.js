import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysList, setToysList}) {
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((response) => response.json())
    .then((toys) => setToysList(toys))
  }, [])

  return (
    <div id="toy-collection">{toysList.map((toy) => {
      return <ToyCard 
                toy={toy} 
                key={toy.id}
                toysList={toysList}
                setToysList={setToysList}/>
    })}</div>
  );
}

export default ToyContainer;
