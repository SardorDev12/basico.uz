import { FaPhone } from "react-icons/fa";

import "../Sass/cta.scss";

function Cta() {
  return (
    <button type="button" className="cta">
      <a href="tel:+998-90 174-10-90">
        <FaPhone />
      </a>
    </button>
  );
}
export default Cta;
