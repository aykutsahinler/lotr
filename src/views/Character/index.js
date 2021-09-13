import { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";

function Character(characterId) {
  const [character, setCharacter] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [className, setClassName] = useState("specific-character-container");

  const initialUrl = `${process.env.REACT_APP_API_BASE_ENDPOINT}`;
  const token = "js8FQx46bt49x3hRwCdy";

  useEffect(() => {
    const getCharacterInfos = async () => {
      try {
        await axios
          .get(`${initialUrl}/character/${characterId.character}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setCharacter(response.data.docs);
          });
      } catch (err) {
        // Handle Error
        console.error(err);
      }
    };
    getCharacterInfos();
  }, [characterId.character, initialUrl]);

  const close = () => {
    setIsOpen(false);
    setClassName("close")
    if (isOpen === false) {
      setTimeout(() => {
        setIsOpen(true);
      }, 200);
    }
  };

  return (
    <div className={className}>
      <span onClick={close} className="cross">
        X
      </span>
      {character.map((info, index) => {
        return (
          <ul key={index} className="character-infos">
            <li>
              <b>Name: </b>
              <span>{info.name !== "" ? info.name.toUpperCase() : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Birth: </b>
              <span>{info.birth !== "" ? info.birth : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Death: </b>
              <span>{info.death !== "" ? info.death : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Gender: </b>
              <span>{info.gender !== "" ? info.gender : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Height: </b>
              <span>{info.height !== "" ? info.height : "Don't know"}</span>
            </li>
            <br />
            
            <li>
              <b>Race: </b>
              <span>{info.race !== "" ? info.race : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Realm: </b>
              <span>{info.realm !== "" ? info.realm : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Spouse: </b>
              <span>{info.spouse !== "" ? info.spouse : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>Hair: </b>
              <span>{info.hair !== "" ? info.hair : "Don't know"}</span>
            </li>
            <br />
            <li>
              <b>WikiUrl: </b>
              <a
                href={info.wikiUrl !== "" ? info.wikiUrl : "Don't know"}
                target="_blank" rel="noreferrer" 
              >
                WikiUrl
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Character;
