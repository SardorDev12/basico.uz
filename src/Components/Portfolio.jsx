import "../Sass/portfolio.scss";
import image1 from "../assets/Images/Portfolio/portfoilo (1).jpg";
import image2 from "../assets/Images/Portfolio/portfoilo (2).jpg";
import image3 from "../assets/Images/Portfolio/portfoilo (3).jpg";
import image4 from "../assets/Images/Portfolio/portfoilo (4).jpg";
import image5 from "../assets/Images/Portfolio/portfoilo (5).jpg";
import image6 from "../assets/Images/Portfolio/portfoilo (6).jpg";
import image7 from "../assets/Images/Portfolio/portfoilo (7).jpg";
import image8 from "../assets/Images/Portfolio/portfoilo (8).jpg";
import image9 from "../assets/Images/Portfolio/portfoilo (9).jpg";
import image10 from "../assets/Images/Portfolio/portfoilo (10).jpg";
import image11 from "../assets/Images/Portfolio/portfoilo (11).jpg";
import image12 from "../assets/Images/Portfolio/portfoilo (12).jpg";
import image13 from "../assets/Images/Portfolio/portfoilo (13).jpg";
import image14 from "../assets/Images/Portfolio/portfoilo (14).jpg";
import image15 from "../assets/Images/Portfolio/portfoilo (15).jpg";
import image16 from "../assets/Images/Portfolio/portfoilo (16).jpg";

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
        <div className="portfolio-item">
          <img src={image9} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image10} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image11} alt="portfolio-image" />
        </div>
        <div className="portfolio-item">
          <img src={image12} alt="portfolio-image" />
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
        {/* <div className="portfolio-item">
          <img src={image17} alt="portfolio-image" />
        </div> */}
      </div>
    </section>
  );
}
export default Portfolio;
