import React, { useState, useEffect } from "react";
import "./styles.css";

async function getCharacters() {
  try {
    let response = await fetch(
      "https://vleonecezar.github.io/dragonball-fansite/api/characters.json"
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(
        data["characters"].map(({ id, image, name }) => {
          return (
            <div key={id} className="character">
              <img src={image} alt={`foto de ${name}`} />
              <p>{name} teste</p>
            </div>
          );
        })
      );
    });
  }, []);

  return (
    <div className="main-characters">
      <h2>Principais Personagens</h2>
      <div className="characters">{characters}</div>
    </div>
  );
};

export default Characters;
