import React, { useState } from "react";
import FAQ_Item from "./FAQ_Item";
import faqImage from "../assets/Images/faq-image.png";
import "../Sass/faq.scss";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "КАКОЙ У ВАС МИНИМАЛЬНЫЙ ОБЪЁМ ЗАКАЗА?",
      answer: "Минимальный объём заказа составляет 20 шт.",
    },
    {
      question: "КАКИЕ УСЛОВИЯ ОПЛАТЫ?",
      answer:
        "Предоплата в размере 50% необходима при заказе, оставшуюся сумму после готовности.",
    },
    {
      question: "ЕСТЬ ЛИ У ВАС ДОСТАВКА?",
      answer:
        "Доставка по Ташкенту бесплатная. Доставка в другие области Узбекистана оплачивается клиентом.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQ_Item
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            toggleAnswer={() => toggleAnswer(index)}
          />
        ))}
      </div>
      <div className="faq-image">
        <img src={faqImage} alt="faq-image" />
      </div>
    </section>
  );
}

export default Faq;
