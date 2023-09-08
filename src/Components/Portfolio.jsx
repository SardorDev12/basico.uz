import "../Sass/portfolio.scss";
import image1 from "../assets/Images/Portfolio/image (1).jpg";
import image2 from "../assets/Images/Portfolio/image (2).jpg";
import image3 from "../assets/Images/Portfolio/image (3).jpg";
import image4 from "../assets/Images/Portfolio/image (4).jpg";
import image5 from "../assets/Images/Portfolio/image (5).jpg";
import image6 from "../assets/Images/Portfolio/image (6).jpg";
import image8 from "../assets/Images/Portfolio/image (8).jpg";
import image9 from "../assets/Images/Portfolio/image (9).jpg";

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Наши Проекты</h2>
      <div className="section-container">
        <div className="portfolio-item">
          <img src={image1} alt="portfolio-image" />
        </div>

        <div className="portfolio-item">
          <img src={image3} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image6} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image2} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image4} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image5} alt="portfolio-image" />
        </div>

        <div className="portfolio-item">
          <img src={image8} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image9} alt="portfolio-image" />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
