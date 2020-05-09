import React, { useState } from "react";
import logoSpotify from "../assets/images/logo-spotify.png";
import "../assets/styles/componets/Header.css";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div className="header">
      <div className="header-img">
        <Link to="/">
          <img src={logoSpotify} alt="logo-spotify" />
        </Link>
      </div>

      {burger ? (
        <i className="material-icons burger" onClick={() => setBurger(false)}>
          close
        </i>
      ) : (
        <i className="material-icons burger" onClick={() => setBurger(true)}>
          dehaze
        </i>
      )}
      <Menu burger={burger} />
    </div>
  );
};

export default Header;
