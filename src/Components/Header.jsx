import "../Sass/variables.scss";
import "../Sass/header.scss";
import logo from "../assets/Images/logo.svg";
import CallBtn from "./CallBtn";
import { FaBars } from "react-icons/fa";
import { memo, useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    console.log("Click");
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(true);
    }
  };

  return (
    <header className="header" id="home">
      <div className="mobile">
        <FaBars className="burger-menu" onClick={handleToggle} />
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <ul className={`nav-items ${toggle ? "show" : ""} `}>
        <li className="nav-item">
          <a href="#">Главная</a>
        </li>
        <li className="nav-item">
          <a href="#header">O нас</a>
        </li>
        <li className="nav-item">
          <a href="#header">Услуги</a>
        </li>
        <li className="nav-item">
          <a href="#header">Портфолио</a>
        </li>
        <li className="nav-item">
          <a href="#header">Контакты</a>
        </li>
      </ul>
      <CallBtn />
    </header>
  );
}
export default memo(Header);
