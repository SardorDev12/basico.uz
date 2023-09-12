import "../Sass/services.scss";
import service1 from "../assets/Images/Servis 1.jpg";
import service2 from "../assets/Images/Servis 3.jpg";
import service3 from "../assets/Images/Servis 2.jpg";
// import service1 from "../assets/Images/Serv 1.jpg";
// import service2 from "../assets/Images/Serv 2.jpg";
// import service3 from "../assets/Images/Serv 3.jpg";
// import service2 from "../assets/Images/1.png";
// import service1 from "../assets/Images/2.png";
// import service3 from "../assets/Images/4.png";
// import service1 from "../assets/Images/Service 1.png";
// import service2 from "../assets/Images/Service 2.png";
// import service3 from "../assets/Images/Service 3.png";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Наши Услуги</h2>
      <div className="services">
        <div className="service">
          <div className="service-image">
            <img src={service1} alt="service-image" />
          </div>
          <h2 className="service-title">Продажа готовых изделий</h2>
        </div>
        <div className="service">
          <div className="service-image">
            <img src={service2} alt="service-image" />
          </div>
          <h2 className="service-title">
            Нанесение логотипа на наши готовые изделия
          </h2>
        </div>
        <div className="service">
          <div className="service">
            <div className="service-image">
              <img src={service3} alt="service-image" />
            </div>
            <h2 className="service-title">
              {" "}
              Производство изделий с нуля, согласно ТЗ
            </h2>
          </div>
        </div>
      </div>
    </section>
    // <div className="services-container">
    //     <div className="service">
    //       {/* <div className="service-img"></div> */}
    //       <img src={service1} alt="service-image" />
    //       <div className="service-desc">
    //         <h3 className="service-title">Продажа готовых изделий</h3>
    //         {/* <p className="service-text">
    //           Производим готовый трикотаж: футболки, поло, лонгсливы, свитшоты,
    //           худи
    //         </p> */}
    //       </div>
    //     </div>
    //     <div className="service">
    //       <div className="service-img">
    //         <img src={service2} alt="service-image" />
    //       </div>
    //       <div className="service-desc">
    //         <h3 className="service-title">
    //           Нанесение логотипа на наши готовые изделия
    //         </h3>
    //         {/* <p className="service-text">
    //           Печать логотипа или вышивка на готовую одежду.
    //         </p> */}
    //       </div>
    //     </div>
    //     <div className="service">
    //       <div className="service-img">
    //         <img src={service3} alt="service-image" />
    //       </div>
    //       <div className="ervice-desc">
    //         <h3 className="service-title">
    //           Производство изделий с нуля, согласно ТЗ
    //         </h3>
    //         {/* <p className="service-text">Индивидуальные заказы.</p> */}
    //       </div>
    //     </div>
  );
}
export default Services;
