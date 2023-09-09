import "../Sass/qualities.scss";

import { AiOutlineUser } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Qualities() {
  return (
    <section className="qualities-section" id="qualities">
      <h2 className="section-title">Почему именно Мы?</h2>
      <div className="qualities">
        <div className="quality">
          <div className="quality-icon">
            <IoIosPeople />
          </div>
          <h3 className="quality-title">Удивительный Опыт Для Клиента</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <IoIosCheckmarkCircleOutline />
          </div>
          <h3 className="quality-title">Качество Превыше Всего</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineUser />
          </div>
          <h3 className="quality-title">Индивидуальный Подход</h3>
        </div>
      </div>
    </section>
  );
}
export default Qualities;
