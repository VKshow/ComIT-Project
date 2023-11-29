import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";

import "./menu.css";

import Home from "../home/Home";
import Rent from "../rent/Rent";
import Buy from "../buy/Buy";
import About from "../about/About";
import NotFound from "./NotFound";

const Menu = () => {
  return (
    <>
      <Router>
        <nav>
          <img
            className="menu__logo"
            src="https://www.der-kanadaspezialist.de/de-wAssets/img/produkte/Canadream/weblication/wThumbnails/canadream-logo-81007393-924f645a@688ll.png"
            alt="logo"
          />
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/rent">RENT RV</Link>
            </li>
            <li>
              <Link to="/buy">BUY RV</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/about" element={<About />} />
          {/* catch if the path is wrong */}

          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Menu;
