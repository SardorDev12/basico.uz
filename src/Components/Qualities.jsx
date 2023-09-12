import "../Sass/qualities.scss";

import { AiOutlineUser } from "react-icons/ai";
import { IoIosPeople, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaBolt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Qualities() {
  return (
    <section className="qualities-section" id="qualities">
      <h2 className="section-title">Почему именно Мы?</h2>
      <div className="qualities">
        <div className="quality">
          <div className="quality-icon">
            <FaBolt />
          </div>
          <h3 className="quality-title">Быстрое Изготовление</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <FaSearch />
          </div>
          <h3 className="quality-title">Внимание к Деталям</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <IoIosPeople />
          </div>
          <h3 className="quality-title">Быстрая Доставка</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <IoIosCheckmarkCircleOutline />
          </div>
          <h3 className="quality-title">Необычный Дизайн</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineUser />
          </div>
          <h3 className="quality-title">Изделия любой Сложности</h3>
        </div>
      </div>
    </section>
  );
}
export default Qualities;
