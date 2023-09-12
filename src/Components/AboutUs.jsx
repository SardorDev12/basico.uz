import "../Sass/about.scss";
import processImage from "../assets/Images/About img.jpg";
function AboutUs() {
  return (
    <section className="about " id="about">
      <h2 className="section-title">КТО МЫ?</h2>
      <div className="section-content">
        <div className="about-info">
          <p>
            <span className="strong">Бренд Basico</span> – это удобная базовая
            одежда на каждый день. Наша команда – это опытные специалисты, а вся
            продукция изготавливается из высококачественных материалов.
          </p>
          <p>
            Мы занимаемся производством одежды с 2015 года. Раньше производили
            одежду для зарубежных брендов. Работая на экспорт, мы получили
            большой опыт. А с 2022 года начали производить свою одежды под
            брендом Basico. В линейке нашей продукции представлены худи,
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
