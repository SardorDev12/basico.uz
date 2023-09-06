import service1 from "../assets/Images/Service 1.png";
import service2 from "../assets/Images/Service 2.png";
import service3 from "../assets/Images/Service 3.png";
import "../Sass/services.scss";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Наши Услуги</h2>
      <div className="services">
        <div className="service">
          <div className="service-text">
            Создаем стильную и качественную одежду: футболки, поло, лонгсливы,
            свитшоты и худи. Материалы высокого качества и передовые технологии
            для комфорта и модного стиля.
          </div>
          <div className="service-image">
            <img src={service1} alt="" />
          </div>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={service2} alt="" />
          </div>
          <div className="service-text">
            У нас также предоставляется услуга нанесения логотипов и изображений
            на нашу продукцию. Ваши уникальные дизайны станут частью вашей
            одежды, добавляя индивидуальность и стиль.
          </div>
        </div>
        <div className="service">
          <div className="service-text">
            Кроме того, мы предоставляем возможность полностью
            персонализированных дизайнов. Вы можете заказать у нас продукцию с
            уникальными и индивидуальными дизайнами, которые отражают вашу
            уникальность и стиль.
          </div>
          <div className="service-image">
            <img src={service3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
