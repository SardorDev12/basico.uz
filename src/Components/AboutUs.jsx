import "../Sass/about.scss";
import processImage from "../assets/Images/About img.jpg";
import logo from "../assets/Images/Basico Logo - Black.svg";
function AboutUs() {
  return (
    <section className="about " id="about">
      <h2 className="section-title">КТО МЫ?</h2>
      <div className="section-content">
        <div className="about-info">
          <div className="content-image">
            <img src={logo} alt="image" />
          </div>
          <p>
            Наша история началась в 2015 году с производства одежды для
            зарубежных брендов. Работая на мировом рынке, мы приобрели богатый
            опыт и навыки. А в 2022 году мы решили воплотить свой собственный
            стиль, запустив линию базовой универсальной одежды под названием
            Basico.
            <br /> <br />В нашем ассортименте представлены футболки, поло,
            лонгсливы, свитшоты, худи и не только. Мы гордимся тем, что каждый
            наш товар изготавливается из высококачественных материалов, а наша
            команда состоит из опытных специалистов, которые стремятся создавать
            комфортную и качественную одежду.
          </p>
        </div>
        <div className="about-image">
          <img src={processImage} alt="image" />
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
