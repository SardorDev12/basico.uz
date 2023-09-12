import "../Sass/variables.scss";
import "../Sass/header.scss";
import logo from "../assets/Images/logo.svg";
import CallBtn from "./CallBtn";
import { FaBars } from "react-icons/fa";
import { memo, useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleNavItemClicked = () => {
    setToggle(false);
  };
  const handleToggle = () => {
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(true);
    }
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="mobile">
          <FaBars className="burger-menu" onClick={handleToggle} />
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <ul className={`nav-items ${toggle ? "show" : ""} `}>
          <li className="nav-item" onClick={handleNavItemClicked}>
            <a href="#home">Главная</a>
          </li>

          <li className="nav-item" onClick={handleNavItemClicked}>
            <a href="#services">Услуги</a>
          </li>
          <li className="nav-item" onClick={handleNavItemClicked}>
            <a href="#about">О Нас</a>
          </li>

          <li className="nav-item" onClick={handleNavItemClicked}>
            <a href="#portfolio">Портфолио</a>
          </li>
          <li className="nav-item" onClick={handleNavItemClicked}>
            <a href="#footer">Контакты</a>
          </li>
        </ul>
        <CallBtn typeBtn={"header-btn"} />
      </div>
    </header>
  );
}
export default memo(Header);
