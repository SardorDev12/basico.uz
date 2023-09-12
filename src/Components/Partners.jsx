import "../Sass/partners.scss";
import partnerImage1 from "../assets/Images/Partners/Partner (1).png";
import partnerImage2 from "../assets/Images/Partners/Partner (1).svg";
import partnerImage3 from "../assets/Images/Partners/Partner (2).png";
import partnerImage4 from "../assets/Images/Partners/Partner (2).svg";
import partnerImage5 from "../assets/Images/Partners/Partner (3).png";
import partnerImage6 from "../assets/Images/Partners/Partner (3).svg";
import partnerImage7 from "../assets/Images/Partners/Partner (4).png";
import partnerImage8 from "../assets/Images/Partners/Partner (4).svg";
import partnerImage9 from "../assets/Images/Partners/Partner (5).png";
import partnerImage10 from "../assets/Images/Partners/Partner (6).png";
import partnerImage11 from "../assets/Images/Partners/Partner (6).svg";
import partnerImage12 from "../assets/Images/Partners/Partner (7).png";
import partnerImage13 from "../assets/Images/Partners/Partner (8).png";
import partnerImage14 from "../assets/Images/Partners/Partner (9).png";
import partnerImage15 from "../assets/Images/Partners/Partner (10).png";
import partnerImage16 from "../assets/Images/Partners/Partner (11).png";
import partnerImage17 from "../assets/Images/Partners/Partner (13).png";

function Partners() {
  return (
    <section className="partners">
      <h2 className="section-title">НАШИ КЛИЕНТЫ</h2>
      <div className="partners-container">
        <div className="partner">
          <img src={partnerImage1} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage2} alt="partner-image" />
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
          <img src={partnerImage7} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage8} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage9} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage10} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage11} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage12} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage13} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage14} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage15} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage16} alt="partner-image" />
        </div>
      </div>
    </section>
  );
}
export default Partners;
