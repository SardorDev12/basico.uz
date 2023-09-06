import { memo } from "react";
import "../Sass/header.scss";

function CallBtn() {
  return (
    <a href="#contact">
      <button type="button" className="call-btn">
        Позвоните нам
      </button>
    </a>
  );
}
export default memo(CallBtn);
