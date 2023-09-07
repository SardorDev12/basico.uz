import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ_Item({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <tbody>
      <tr>
        <th onClick={toggleAnswer} className="faq-question">
          <FaChevronDown />
          {question}
        </th>
      </tr>
      <tr>
        <td className={`answer ${isAnswerVisible ? "visible" : "hide"}`}>
          {isAnswerVisible && answer}
        </td>
      </tr>
    </tbody>
  );
}

export default FAQ_Item;
