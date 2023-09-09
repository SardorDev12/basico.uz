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
          <h3 className="quality-title">быстрое изготовление</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <FaSearch />
          </div>
          <h3 className="quality-title">внимание к деталям</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <IoIosPeople />
          </div>
          <h3 className="quality-title">быстрая доставка</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <IoIosCheckmarkCircleOutline />
          </div>
          <h3 className="quality-title">необычный дизайн</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineUser />
          </div>
          <h3 className="quality-title">изделия любой сложности</h3>
        </div>
      </div>
    </section>
  );
}
export default Qualities;
