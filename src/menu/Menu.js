import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./menu.css";

import Home from "../home/Home";
import Info from "../info/Info";
import Chat from "../chat/Chat";
import Game from "../game/Game";

const Menu = () => {
  return (
    <>
      <Router>
        <nav>
          <img
            className="menu__logo"
            src="https://i.ytimg.com/vi/r2UnTYjfhxA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDn6TYB2UQmZ9SdZQczVW8LJ_-FcA"
            alt="logo"
          />
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/info">INFO</Link>
            </li>
            <li>
              <Link to="/chat">CHAT</Link>
            </li>
            <li>
              <Link to="/game">GAME</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
};

export default Menu;
