import "../Sass/qualities.scss";

import { AiOutlineUser } from "react-icons/ai";
import { IoIosPeople, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaBolt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPrint } from "react-icons/md";

function Qualities() {
  return (
    <section className="qualities-section" id="qualities">
      <h2 className="section-title">Почему именно Мы?</h2>
      <div className="qualities">
        <div className="quality">
          <div className="quality-icon">
            <FaCheck />
          </div>
          <h3 className="quality-title">
            Оперативность - наличие товаров на складе
          </h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <FaSearch />
          </div>
          <h3 className="quality-title">Внимание к Деталям</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <MdPrint />
          </div>
          <h3 className="quality-title">Различные виды материалов и печати</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineShoppingCart />
          </div>
          <h3 className="quality-title">Минимальная партия от 20 штук</h3>
        </div>
        <div className="quality">
          <div className="quality-icon">
            <AiOutlineUser />
          </div>
          <h3 className="quality-title">
            Гибкость - пошив индивидуальных заказов
          </h3>
        </div>
      </div>
    </section>
  );
}
export default Qualities;
