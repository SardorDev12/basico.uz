import { memo } from "react";
import "../Sass/header.scss";

function CallBtn({ typeBtn }) {
  return (
    <a href="#contact">
      <button type="button" className={`call-btn ${typeBtn}`}>
        Позвоните нам
      </button>
    </a>
  );
}
export default memo(CallBtn);
