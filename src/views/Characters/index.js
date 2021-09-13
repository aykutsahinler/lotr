import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Character from "../Character/";

import "./style.css";

function Characters() {
  const initialUrl = `${process.env.REACT_APP_API_BASE_ENDPOINT}`;
  const [characters, setCharacters] = useState([]);
  const [searched, setSearched] = useState("");
  const races = [
    "Human",
    "Elf",
    "Orc",
    "Ents",
    "Men",
    "Balrog",
    "Hobbit",
    "Dragons",
    "Maiar",
    "Dwarves",
  ];
  const token = "js8FQx46bt49x3hRwCdy";

  useEffect(() => {
    const getCharacters = async () => {
      try {
        await axios
          .get(`${initialUrl}/character`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setCharacters(response.data.docs);
          });
      } catch (err) {
        // Handle Error
        console.error(err);
      }
    };
    getCharacters();
  }, [initialUrl]);

  const filterRaces = async (race) => {
    try {
      await axios
        .get(`${initialUrl}/character?race=${race}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data.docs)
          setCharacters(response.data.docs)
        });
    } catch (err) {
      // Handle Error
      console.error(err);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <main>
        <div className="character-container">
          <div className="character-header">
            <h1>Characters</h1>
            <input
              type="text"
              placeholder="Search character..."
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
            />
          </div>

          <div className="filter-button-container">
            <div className="button-list">
              {races.map((race, index) => {
                return (
                  <button key={index} onClick={() => filterRaces(race)}>
                    {race}
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="character-list">
            {characters
              .filter(
                (character) =>
                  character.name.toLowerCase().includes(searched) ||
                  searched === ""
              )
              .map((character, index) => (
                <li className="list-item" key={index}>
                  <Link to={`/${character.name}`}>{character.name}</Link>
                  <Route path={`/${character.name}`}>
                    <Character character={character._id}></Character>
                  </Route>
                </li>
              ))}
          </ul>

          <button onClick={scrollTop} className="top-btn">
            <span className="material-icons">arrow_upward</span>
          </button>
        </div>
      </main>
    </Router>
  );
}

export default Characters;
