import React from "react";

function ToyCard({toy, toysList, setToysList}) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
    .then(setToysList([...toysList.filter((listToy) => {
      if(toy.id !== listToy.id) {
        return true
      }
    })]))
  }

  function handleLike() {
    const newLikes = toy.likes += 1
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...toy, likes: newLikes})
    })
    .then((response) => response.json())
    .then((modToy) => setToysList(toysList.map((listToy) => {
      if(listToy.id === modToy.id) {
        return modToy
      }
      else {
        return listToy
      }
    })))
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like{"<3"}</button>
      <button onClick={handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
