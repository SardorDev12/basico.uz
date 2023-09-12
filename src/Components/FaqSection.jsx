import faqImage from "../assets/Images/faq-image.png";
import "../Sass/faq.scss";

function Faq() {
  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">Часто задаваемые вопросы</h2>
      <div className="section-cont">
        <div className="faq-container">
          <div className="cont-item">
            <h3 className="question">КАКОЙ У ВАС МИНИМАЛЬНЫЙ ОБЪЁМ ЗАКАЗА?</h3>
            <div className="answer">
              Минимальный объём заказа составляет 20 шт.
            </div>
          </div>
          <div className="cont-item">
            <h3 className="question">КАКИЕ УСЛОВИЯ ОПЛАТЫ?</h3>
            <div className="answer">
              Предоплата в размере 50% необходима при заказе, оставшуюся сумму
              после готовности.
            </div>
          </div>
          <div className="cont-item">
            <h3 className="question">ЕСТЬ ЛИ У ВАС ДОСТАВКА?</h3>
            <div className="answer">
              Доставка по Ташкенту бесплатная. Доставка в другие области
              Узбекистана оплачивается клиентом.
            </div>
          </div>
        </div>
        <div className="faq-image">
          <img src={faqImage} alt="faq-image" />
        </div>
      </div>
    </section>
  );
}

export default Faq;
