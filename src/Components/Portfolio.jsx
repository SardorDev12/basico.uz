import "../Sass/portfolio.scss";
import image1 from "../assets/Images/Portfolio/1.jpg";
import image2 from "../assets/Images/Portfolio/2.jpg";
import image3 from "../assets/Images/Portfolio/3.jpg";
import image4 from "../assets/Images/Portfolio/4.jpg";
import image5 from "../assets/Images/Portfolio/5.jpg";
import image6 from "../assets/Images/Portfolio/6.jpg";
import image7 from "../assets/Images/Portfolio/7.jpg";
import image8 from "../assets/Images/Portfolio/8.jpg";

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Наши Кейсы</h2>
      <div className="section-container">
        <div className="portfolio-item">
          <img src={image1} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image2} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image3} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image4} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image5} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image6} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image7} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image8} alt="portfolio-image" />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
