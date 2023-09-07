import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ_Item({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <>
      <tr>
        <FaChevronDown />
        <th onClick={toggleAnswer} className="faq-question">
          {question}
        </th>
      </tr>
      <tr>
        <td className={`answer ${isAnswerVisible ? "visible" : "hide"}`}>
          {isAnswerVisible && answer}
        </td>
      </tr>
    </>
  );
}

export default FAQ_Item;
