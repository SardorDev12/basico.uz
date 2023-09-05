import "../Sass/variables.scss";
import "../Sass/header.scss";
import logo from "../assets/Images/logo.svg";
import CallBtn from "./CallBtn";
function Header() {
  return (
    <header className="header" id="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#header">Главная</a>
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
      </nav>
      <CallBtn />
    </header>
  );
}
export default Header;
