import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function FAQ_Item({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="faq-item">
      <div onClick={toggleAnswer} className="faq-question">
        {isAnswerVisible ? <FaChevronDown /> : <FaChevronRight />}
        {question}
      </div>
      <div className={`answer ${isAnswerVisible ? "visible" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

export default FAQ_Item;
