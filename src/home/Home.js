import "./home.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Rent from "../rent/Rent";
import Buy from "../buy/Buy";

const Home = () => {
  return (
    <div className="home__main">
      <div className="home__main-content">
        <p className="home__main-content-pretitle">
          Experience Canada At Your Own Pace With CanaDream
        </p>
        <p className="home__main-content-title">DISCOVER YOUR ADVENTURE</p>
        <div className="home__main-btn-group">
          <Link className="home__main-btn blue" to="/rent">
            RENT RV
          </Link>
          <Link className="home__main-btn" to="/buy">
            BUY RV
          </Link>
        </div>
      </div>
      <div className="home__main-img">
        <img
          src="https://hawksworth.ca/wp-content/uploads/2020/10/MHA-Mike-Overbeck.jpg"
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Home;
