import "../Sass/qualities.scss";

import { IoMdStar } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";

function Qualities() {
  return (
    <section className="qualities-section" id="qualities">
      <h2 className="section-title">Почему Выбрать Именно Нас?</h2>
      <div className="qualities">
        <div className="quality">
          <div className="quality-icon">
            <IoMdStar />
          </div>
          <h3 className="quality-title">Качество Превыше Всего</h3>
          <p className="quality-text">
            Мы создаем продукцию высшего качества с акцентом на деталях и
            строгим контролем качества.
          </p>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineUser />
          </div>
          <h3 className="quality-title">Индивидуальный Подход</h3>
          <p className="quality-text">
            Мы создаем продукцию высшего качества с акцентом на деталях и
            строгим контролем качества."
          </p>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <FaSmile />
          </div>
          <h3 className="quality-title">Удивительный Опыт Для Клиента</h3>
          <p className="quality-text">
            Ваш партнерство - наша забота, создающая незабываемый опыт.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Qualities;
