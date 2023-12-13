import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";

import "./menu.css";
import '../chat/chat.css'

import Home from "../home/Home";
import Info from "../info/Info";

import Login from "../chat/page/Login";
import Signup from "../chat/page/Signup";
import ChatHome from "../chat/page/ChatHome";
import Game from "../game/Game";

const Menu = () => {

  const [userEmail, setUserEmail] = useState('');

  const sendEmailToParent = (email) => {
    setUserEmail(email);
  };
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
              <Link to="/chatHome">CHAT</Link>
            </li>
            <li>
              <Link to="/game">GAME</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login sendEmailToParent={sendEmailToParent}/>} />
          <Route path="/signup" element={<Signup sendEmailToParent={sendEmailToParent}/>} />
          <Route path="/chatHome" element={<ChatHome userEmail={userEmail} sendEmailToParent={sendEmailToParent} />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
};

export default Menu;
