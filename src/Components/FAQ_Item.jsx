import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function FAQ_Item({ question, answer, isOpen, toggleAnswer }) {
  return (
    <div className="faq-item">
      <div onClick={toggleAnswer} className="faq-question">
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        {question}
      </div>
      <div className={`answer ${isOpen ? "visible" : ""}`}>{answer}</div>
    </div>
  );
}

export default FAQ_Item;
