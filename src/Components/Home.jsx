import homeImage from "../assets/Images/Service 2.png";
import CallBtn from "./CallBtn";
import "../Sass/home.scss";

function Home() {
  return (
    <main className="main">
      <div className="home-image">
        <img src={homeImage} alt="home-image" />
      </div>
      <div className="home-text">
        <h2 className="home-title">
          Вы мечтаете, <br /> мы печатаем
        </h2>
        <p className="home-subtitle">
          Басико - ваш партнер в создании персонализированных футболок, от
          концепции до совершенства.
        </p>
        <CallBtn />
      </div>
    </main>
  );
}
export default Home;
