import "../Sass/portfolio.scss";
import image1 from "../assets/Images/Portfolio/portfoilo (1).jpg";
import image2 from "../assets/Images/Portfolio/portfoilo (2).jpg";
import image4 from "../assets/Images/Portfolio/portfoilo (4).jpg";
import image6 from "../assets/Images/Portfolio/portfoilo (6).jpg";
import image7 from "../assets/Images/Portfolio/portfoilo (7).jpg";
import image9 from "../assets/Images/Portfolio/portfoilo (9).jpg";
import image13 from "../assets/Images/Portfolio/portfoilo (13).jpg";
import image14 from "../assets/Images/Portfolio/portfoilo (14).jpg";
import image15 from "../assets/Images/Portfolio/portfoilo (15).jpg";
import image16 from "../assets/Images/Portfolio/portfoilo (16).jpg";
import image18 from "../assets/Images/Portfolio/portfoilo (18).jpg";
import image19 from "../assets/Images/Portfolio/portfoilo (19).jpg";
// import { useState, useEffect } from "react";

function Portfolio() {
  // const [portfoilo, setPortfolio] = useState([]);
  // useEffect(async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setPortfolio(data);
  // });
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Наши Кейсы</h2>
      <div className="section-container">
        {/* Dynamic setup */}
        {/* {portfoilo.map((item) => {
          return (
            <div className="portfolio-item" key={item.id}>
              <img src={item.img} alt="portfolio-image" />
            </div>
          );
        })} */}
        <div className="portfolio-item">
          <img src={image1} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image6} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image7} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image2} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image9} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image13} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image14} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image15} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image16} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image4} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image18} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image19} alt="portfolio-image" />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
