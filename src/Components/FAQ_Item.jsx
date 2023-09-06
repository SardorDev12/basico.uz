import { FaChevronDown } from "react-icons/fa";

function FAQ_Item({ question, answer }) {
  return (
    <>
      <tr>
        <th className="question">
          <FaChevronDown className="down-arrow" />
          {question}
        </th>
      </tr>
      <tr>
        <td className="answer">{answer}</td>
      </tr>
    </>
  );
}
export default FAQ_Item;
