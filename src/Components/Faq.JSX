import faqImage from "../assets/Images/faq-image.png";
import "../Sass/faq.scss";
import FAQ_Item from "./FAQ_Item";

function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <FAQ_Item
          question={"КАКОЙ У ВАС МИНИМАЛЬНЫЙ ОБЪЁМ ЗАКАЗА?"}
          answer={"Минимальный объём заказа составляет 20."}
        />
        <FAQ_Item
          question={"КАКИЕ УСЛОВИЯ ОПЛАТЫ?"}
          answer={"Предоплата в размере 50% необходима при заказе."}
        />
        <FAQ_Item
          question={"ЕСТЬ ЛИ У ВАС ДОСТАВКА?"}
          answer={
            "Мы предоставляем B2B доставку в пределах Ташкента. За пределами Ташкента оплата должна быть произведена клиентом."
          }
        />
      </div>
      <div className="faq-image">
        <img src={faqImage} alt="faq-image" />
      </div>
    </section>
  );
}
export default Faq;
