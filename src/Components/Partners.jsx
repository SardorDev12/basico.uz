import "../Sass/partners.scss";
import partnerImage1 from "../assets/Images/Partners/Partner (1).png";
import partnerImage2 from "../assets/Images/Partners/Partner (2).png";
import partnerImage3 from "../assets/Images/Partners/Partner (3).png";
import partnerImage4 from "../assets/Images/Partners/Partner (4).png";
import partnerImage5 from "../assets/Images/Partners/Partner (5).svg";
import partnerImage6 from "../assets/Images/Partners/Partner (6).png";
import partnerImage7 from "../assets/Images/Partners/Partner (7).png";
import partnerImage8 from "../assets/Images/Partners/Partner (8).png";
import partnerImage9 from "../assets/Images/Partners/Partner (9).png";
import partnerImage10 from "../assets/Images/Partners/Partner (10).png";
import partnerImage11 from "../assets/Images/Partners/Partner (11).svg";
import partnerImage12 from "../assets/Images/Partners/Partner (12).svg";
import partnerImage13 from "../assets/Images/Partners/Partner (13).svg";
import partnerImage14 from "../assets/Images/Partners/Partner (14).png";
import partnerImage15 from "../assets/Images/Partners/Partner (15).svg";
import partnerImage16 from "../assets/Images/Partners/Partner (16).svg";

function Partners() {
  return (
    <section className="partners">
      <h2 className="section-title">НАШИ КЛИЕНТЫ</h2>
      <div className="partners-container">
        <div className="partner">
          <img src={partnerImage1} alt="partner-image" />
        </div>
        <div className="partner small">
          <img src={partnerImage2} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage3} alt="partner-image" />
        </div>
        <div className="partner small">
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
        <div className="partner small">
          <img src={partnerImage16} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage9} alt="partner-image" />
        </div>
        <div className="partner">
          <img src={partnerImage10} alt="partner-image" />
        </div>
        <div className="partner small">
          <img src={partnerImage15} alt="partner-image" />
        </div>

        <div className="partner ">
          <img src={partnerImage11} alt="partner-image" />
        </div>

        <div className="partner small">
          <img src={partnerImage12} alt="partner-image" />
        </div>
        <div className="partner big">
          <img src={partnerImage13} alt="partner-image" />
        </div>
        <div className="partner ">
          <img src={partnerImage14} alt="partner-image" />
        </div>
      </div>
    </section>
  );
}
export default Partners;
