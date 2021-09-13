import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";

import Books from "../../views/Books";
import Movies from "../../views/Movies";
import Home from "../../views/Home";
import Characters from "../../views/Characters";
import Links from "../../views/Links";

import logo from "../../assets/Logo/ring.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const openBurger = () => {
    setIsopen(!isOpen);
  };
  return (
    <Router>
      <nav className="navbar-container">
        <li>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <ul className="link-container">
          <li>
            <Link to="/links">Useful Links</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
        <span onClick={openBurger} className="material-icons md-36 md-light">
          menu
        </span>
        {
          isOpen === true && <ul className="link-container-navbar">
          <li>
            <Link to="/links">Useful Links</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
        }
      </nav>

      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/characters" component={Characters} />
        <Route path="/movies" component={Movies} />
        <Route path="/links" component={Links} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Navbar;
