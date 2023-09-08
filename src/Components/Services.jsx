import service1 from "../assets/Images/Service 1.png";
import service2 from "../assets/Images/Service 2.png";
import service3 from "../assets/Images/Service 3.png";
import "../Sass/services.scss";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Наши Услуги</h2>
      <div className="services-container">
        <div className="service">
          <div className="service-img">
            <img src={service1} alt="service-image" />
          </div>
          <div className="service-desc">
            <h3 className="service-title">Изготовление Футболок</h3>
            <p className="service-text">
              {/* Стильная одежда: футболки, поло, лонгсливы, свитшоты, худи -
              высокое качество, передовые технологии. */}
              Производим готовый трикотаж: футболки, поло, лонгсливы, свитшоты,
              худи
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src={service2} alt="service-image" />
          </div>
          <div className="service-desc">
            <h3 className="service-title">Индивидуальная Печать</h3>
            <p className="service-text">
              Печать логотипа или вышивка на готовую одежду.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src={service3} alt="service-image" />
          </div>
          <div className="ervice-desc">
            <h3 className="service-title">Персонализация Под Заказ</h3>
            <p className="service-text">Индивидуальные заказы.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
