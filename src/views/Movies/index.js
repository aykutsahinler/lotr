import axios from "axios";
import { useState, useEffect } from "react";

import HobbitSeries from "../../assets/Movies/HobbitSeries.jpg";
import LOTRSeries from "../../assets/Movies/LOTRSeries.jpg";
import Lotr1 from "../../assets/Movies/LOTR-1.jpg";
import Lotr2 from "../../assets/Movies/LOTR-2.jpg";
import Lotr3 from "../../assets/Movies/LOTR-3.jpg";
import Hobbit1 from "../../assets/Movies/Hobbit-1.jpg";
import Hobbit2 from "../../assets/Movies/Hobbit-2.jpg";
import Hobbit3 from "../../assets/Movies/Hobbit-3.jpg";

import "./style.css"

function Movies() {
  const [movies, setMovies] = useState([]);

  const initialUrl = `${process.env.REACT_APP_API_BASE_ENDPOINT}`;
  const token = "js8FQx46bt49x3hRwCdy";

  const posters = [
    LOTRSeries,
    HobbitSeries,
    Hobbit1,
    Hobbit2,
    Hobbit3,
    Lotr2,
    Lotr1,
    Lotr3,
  ];

  useEffect(() => {
    const getMovies = async () => {
      try {
        await axios
          .get(`${initialUrl}/movie`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setMovies(response.data.docs);
          });
      } catch (err) {
        // Handle error
        console.log(err);
      }
    };

    getMovies();
  }, [initialUrl]);

  return (
    <div className="movie-contaier">
      <h1>Movies</h1> <hr />
      <div className="series-container">
        <h2>Series</h2>
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <div className="movie-info-container">
                  <h2>{movie.name}</h2>
                  <p>
                    <strong>Runtime: </strong> {movie.runtimeInMinutes} minutes
                  </p>
                  <p>
                    <strong>Budget: </strong> {movie.budgetInMillions} millions
                  </p>
                  <p>
                    <strong>Box Office Revenue In Millions: </strong>{" "}
                    {movie.boxOfficeRevenueInMillions} millions
                  </p>
                  <p>
                    <strong>Academy Award Nominations: </strong>{" "}
                    {movie.academyAwardNominations}{" "}
                  </p>
                  <p>
                    <strong>Academy Award Wins: </strong>{" "}
                    {movie.academyAwardWins}
                  </p>
                  <p>
                    <strong>Rotten Tomatoes Score: </strong>{" "}
                    {movie.rottenTomatoesScore}
                  </p>
                </div>
                {

                }
                <div className="poster" style={{ backgroundImage: `url(${posters[index]})`}}>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <br/><br/>
    </div>
  );
}

export default Movies;
