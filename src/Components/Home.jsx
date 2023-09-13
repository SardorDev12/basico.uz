import homeImage from "../assets/Images/Home Image.png";
import CallBtn from "./CallBtn";
import "../Sass/home.scss";

function Home() {
  return (
    <main className="main" id="home">
      <div className="home-image">
        <img src={homeImage} alt="home-image" />
      </div>
      <div className="home-text">
        <h2 className="home-title">
          Basico - Ваш партнёр в создании качественной трикотажной одежды
        </h2>
        <p className="home-subtitle">
          Базовые футболки, поло, свитшоты, лонгсливы, худи и не только.
        </p>
        <CallBtn typeBtn={"home-btn"} />
      </div>
    </main>
  );
}
export default Home;
