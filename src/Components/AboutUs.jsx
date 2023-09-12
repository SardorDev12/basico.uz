import "../Sass/about.scss";
import logo from "../assets/Images/Basico Logo - Black.svg";
import processImage from "../assets/Images/shirt process.jpg";
function AboutUs() {
  return (
    <section className="about " id="about">
      <h2 className="section-title">КТО МЫ?</h2>
      <div className="section-content">
        <div className="about-info">
          <div>
            <img src={logo} alt="image" />
          </div>
          <p>
            Бренд Basico – это удобная базовая одежда на каждый день, которую
            можно совмещать с любимыми вещами из вашего гардероба. Наша команда
            – это опытные специалисты, а вся наша продукция изготавливается из
            высококачественных материалов.
          </p>
          <p>
            Наша команда занимается производством одежды с 2015 года. Раньше мы
            занимались пошивом для зарубежных брендов. Работая на экспорт, мы
            получили большой опыт. А с 2022 года начали производить свою одежды
            под брендом Basico. В линейке нашей продукции представлены худи,
            свитшоты, лонгсливы, футболки, поло, шорты и штаны в самых разных
            цветах.
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
