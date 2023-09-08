import "../Sass/partners.scss";
import partnerImage1 from "../assets/Images/Partners/partnerImage (1).png";
import partnerImage3 from "../assets/Images/Partners/partnerImage (3).png";
import partnerImage4 from "../assets/Images/Partners/partnerImage (4).png";
import partnerImage5 from "../assets/Images/Partners/partnerImage (5).png";
import partnerImage6 from "../assets/Images/Partners/partnerImage (6).png";
import partnerImage9 from "../assets/Images/Partners/partnerImage (9).png";
import partnerImage10 from "../assets/Images/Partners/partnerImage (10).png";

function Partners() {
  return (
    <section className="partners">
      <h2 className="section-title">НАШИ ЛУЧШИЕ КЛИЕНТЫ И ПАРТНЕРЫ</h2>
      <div className="partners-container">
        <div className="partner">
          <img src={partnerImage1} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage3} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage4} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage5} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage6} alt="partner-image" />
        </div>

        <div className="partner">
          <img src={partnerImage9} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage10} alt="partner-image" />
        </div>
      </div>
    </section>
  );
}
export default Partners;
